import { personalInfo } from "@/data/portfolio";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
}

export interface GitHubProfile {
  user: GitHubUser;
  repos: GitHubRepo[];
  languages: { name: string; count: number; color: string }[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  Java: "#b07219",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  React: "#61dafb",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
  PHP: "#4f5d95",
  Ruby: "#701516",
  Swift: "#fa7343",
  Kotlin: "#a97bff",
};

/** URL avatar GitHub haute résolution (512px) */
export function getGitHubAvatarUrl(avatarUrl?: string | null): string {
  const username = personalInfo.githubUsername;

  if (avatarUrl) {
    try {
      const url = new URL(avatarUrl);
      url.searchParams.set("s", "512");
      return url.toString();
    } catch {
      return avatarUrl;
    }
  }

  return `https://github.com/${username}.png`;
}

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  const username = personalInfo.githubUsername;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as GitHubUser;
    const repos = (await reposRes.json()) as GitHubRepo[];

    const languageMap = new Map<string, number>();
    for (const repo of repos) {
      if (repo.language) {
        languageMap.set(
          repo.language,
          (languageMap.get(repo.language) ?? 0) + 1
        );
      }
    }

    const languages = Array.from(languageMap.entries())
      .map(([name, count]) => ({
        name,
        count,
        color: LANGUAGE_COLORS[name] ?? "#6b7280",
      }))
      .sort((a, b) => b.count - a.count);

    return { user, repos, languages };
  } catch {
    return null;
  }
}
