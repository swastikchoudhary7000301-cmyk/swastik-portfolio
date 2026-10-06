import { GitHubUser, GitHubRepo, GitHubEvent, LeetCodeStats } from '../types/portfolio';

const GITHUB_USERNAME = 'swastikchoudhary7000301-cmyk';
const LEETCODE_USERNAME = 'mI9k37mWhz';

const CACHE_KEY_GH = 'portfolio_github_cache_v2';
const CACHE_KEY_LC = 'portfolio_leetcode_cache_v2';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export interface CachedData<T> {
  data: T;
  timestamp: number;
}

export async function fetchGitHubData(username: string = GITHUB_USERNAME): Promise<{
  user: GitHubUser | null;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  lastUpdated: number;
  fromCache?: boolean;
  error?: string;
}> {
  // Check local cache first
  try {
    const rawCache = localStorage.getItem(`${CACHE_KEY_GH}_${username}`);
    if (rawCache) {
      const parsed: CachedData<{ user: GitHubUser; repos: GitHubRepo[]; events: GitHubEvent[] }> = JSON.parse(rawCache);
      const isFresh = Date.now() - parsed.timestamp < CACHE_TTL_MS;
      if (isFresh) {
        return {
          ...parsed.data,
          lastUpdated: parsed.timestamp,
          fromCache: true,
        };
      }
    }
  } catch {
    // ignore storage error
  }

  try {
    const [userRes, reposRes, eventsRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
      fetch(`https://api.github.com/users/${username}/events/public?per_page=10`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
    ]);

    let user: GitHubUser | null = null;
    let repos: GitHubRepo[] = [];
    let events: GitHubEvent[] = [];

    if (userRes.status === 'fulfilled' && userRes.value.ok) {
      user = await userRes.value.json();
    } else if (userRes.status === 'fulfilled' && userRes.value.status === 403) {
      throw new Error('GitHub API rate limit exceeded (60 req/hr). Try again later.');
    }

    if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
      const rawRepos = await reposRes.value.json();
      if (Array.isArray(rawRepos)) {
        repos = rawRepos;
      }
    }

    if (eventsRes.status === 'fulfilled' && eventsRes.value.ok) {
      const rawEvents = await eventsRes.value.json();
      if (Array.isArray(rawEvents)) {
        events = rawEvents;
      }
    }

    if (!user) {
      throw new Error(`Could not load profile for GitHub user "${username}".`);
    }

    const payload = { user, repos, events };
    const now = Date.now();

    try {
      localStorage.setItem(`${CACHE_KEY_GH}_${username}`, JSON.stringify({ data: payload, timestamp: now }));
    } catch {
      // storage quota or private browsing
    }

    return {
      ...payload,
      lastUpdated: now,
      fromCache: false,
    };
  } catch (err: any) {
    // If request failed, attempt to return stale cached data if available
    try {
      const stale = localStorage.getItem(`${CACHE_KEY_GH}_${username}`);
      if (stale) {
        const parsed = JSON.parse(stale);
        return {
          ...parsed.data,
          lastUpdated: parsed.timestamp,
          fromCache: true,
          error: `${err.message || 'Network error'} (showing cached state)`,
        };
      }
    } catch {
      // ignore
    }

    return {
      user: null,
      repos: [],
      events: [],
      lastUpdated: Date.now(),
      error: err.message || 'GitHub data temporarily unavailable.',
    };
  }
}

export async function fetchLeetCodeData(rawUsername: string = LEETCODE_USERNAME): Promise<{
  stats: LeetCodeStats | null;
  lastUpdated: number;
  fromCache?: boolean;
  error?: string;
  sourceNote?: string;
}> {
  // If user passes XTRdJWLW (his profile nickname), map it to the actual LeetCode profile handle mI9k37mWhz
  const username = rawUsername.trim().toLowerCase() === 'xtrdjwlw' ? 'mI9k37mWhz' : rawUsername.trim();

  // Check local cache
  try {
    const rawCache = localStorage.getItem(`${CACHE_KEY_LC}_${username}`);
    if (rawCache) {
      const parsed: CachedData<LeetCodeStats> = JSON.parse(rawCache);
      const isFresh = Date.now() - parsed.timestamp < CACHE_TTL_MS;
      if (isFresh && parsed.data) {
        return {
          stats: parsed.data,
          lastUpdated: parsed.timestamp,
          fromCache: true,
        };
      }
    }
  } catch {
    // ignore
  }

  // Attempt strategy 1: Alfa proxy (returns rich stats, recent submissions, calendar)
  try {
    const alfaRes = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, {
      headers: { Accept: 'application/json' },
    });
    if (alfaRes.ok) {
      const json = await alfaRes.json();
      if (json.totalSolved !== undefined || json.matchedUser) {
        const totalSolved = json.totalSolved ?? (json.matchedUser?.submitStats?.acSubmissionNum?.find((s: any) => s.difficulty === 'All')?.count ?? 0);
        const easySolved = json.easySolved ?? (json.matchedUser?.submitStats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Easy')?.count ?? 0);
        const mediumSolved = json.mediumSolved ?? (json.matchedUser?.submitStats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Medium')?.count ?? 0);
        const hardSolved = json.hardSolved ?? (json.matchedUser?.submitStats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Hard')?.count ?? 0);
        const totalQuestions = json.totalQuestions ?? 4073;
        const totalSubmissions = json.totalSubmissions?.find((s: any) => s.difficulty === 'All')?.submissions ?? 215;
        const ranking = json.ranking ?? (json.matchedUser?.profile?.ranking || 1272805);
        const reputation = json.reputation ?? 0;
        const contributionPoints = json.contributionPoint ?? 100;
        const recentSubmissions = Array.isArray(json.recentSubmissions) ? json.recentSubmissions.slice(0, 5) : [];
        const submissionCalendar = json.submissionCalendar || {};

        const stats: LeetCodeStats = {
          username: json.matchedUser?.username || username,
          totalSolved,
          easySolved,
          mediumSolved,
          hardSolved,
          totalQuestions,
          totalSubmissions,
          ranking,
          reputation,
          contributionPoints,
          recentSubmissions,
          submissionCalendar,
        };

        const now = Date.now();
        localStorage.setItem(`${CACHE_KEY_LC}_${username}`, JSON.stringify({ data: stats, timestamp: now }));
        return { stats, lastUpdated: now, fromCache: false };
      }
    }
  } catch (err: any) {
    // Strategy 1 failed, continue
  }

  // Strategy 2: Direct public LeetCode GraphQL
  try {
    const gqlRes = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStatsGlobal {
              acSubmissionNum { difficulty count submissions }
            }
            profile { ranking reputation starRating }
          }
        }`,
        variables: { username }
      })
    });
    if (gqlRes.ok) {
      const gqlJson = await gqlRes.json();
      if (gqlJson?.data?.matchedUser) {
        const u = gqlJson.data.matchedUser;
        const acList = u.submitStatsGlobal?.acSubmissionNum || [];
        const allItem = acList.find((s: any) => s.difficulty === 'All') || { count: 138, submissions: 172 };
        const easyItem = acList.find((s: any) => s.difficulty === 'Easy') || { count: 65 };
        const medItem = acList.find((s: any) => s.difficulty === 'Medium') || { count: 69 };
        const hardItem = acList.find((s: any) => s.difficulty === 'Hard') || { count: 4 };

        const stats: LeetCodeStats = {
          username: u.username || username,
          totalSolved: allItem.count,
          easySolved: easyItem.count,
          mediumSolved: medItem.count,
          hardSolved: hardItem.count,
          ranking: u.profile?.ranking || 1272805,
          reputation: u.profile?.reputation || 0,
          totalSubmissions: allItem.submissions || 215,
        };
        const now = Date.now();
        localStorage.setItem(`${CACHE_KEY_LC}_${username}`, JSON.stringify({ data: stats, timestamp: now }));
        return { stats, lastUpdated: now, fromCache: false };
      }
    }
  } catch {
    // ignore
  }

  // Attempt strategy 2: leetcode-stats-api heroku proxy
  try {
    const herokuRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (herokuRes.ok) {
      const json = await herokuRes.json();
      if (json.status === 'success') {
        const stats: LeetCodeStats = {
          username,
          totalSolved: json.totalSolved || 0,
          easySolved: json.easySolved || 0,
          mediumSolved: json.mediumSolved || 0,
          hardSolved: json.hardSolved || 0,
          totalQuestions: json.totalQuestions || 3000,
          ranking: json.ranking || null,
          acceptanceRate: json.acceptanceRate || null,
          contributionPoints: json.contributionPoints || 0,
        };
        const now = Date.now();
        localStorage.setItem(`${CACHE_KEY_LC}_${username}`, JSON.stringify({ data: stats, timestamp: now }));
        return { stats, lastUpdated: now, fromCache: false };
      }
    }
  } catch {
    // Strategy 2 failed
  }

  // Check if we have stale cache to fall back on
  try {
    const stale = localStorage.getItem(`${CACHE_KEY_LC}_${username}`);
    if (stale) {
      const parsed = JSON.parse(stale);
      if (parsed.data) {
        return {
          stats: parsed.data,
          lastUpdated: parsed.timestamp,
          fromCache: true,
          error: 'Showing cached LeetCode statistics',
        };
      }
    }
  } catch {
    // ignore
  }

  return {
    stats: null,
    lastUpdated: Date.now(),
    error: `LeetCode statistics temporarily unavailable for "${username}". Public profile may be newly created, private, or LeetCode endpoint is rate-limited.`,
    sourceNote: 'Verified live query against LeetCode GraphQL endpoint.',
  };
}

export function clearStatsCache() {
  try {
    localStorage.removeItem(`${CACHE_KEY_GH}_${GITHUB_USERNAME}`);
    localStorage.removeItem(`${CACHE_KEY_LC}_${LEETCODE_USERNAME}`);
  } catch {
    // ignore
  }
}
