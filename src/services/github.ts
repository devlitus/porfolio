export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    fork: boolean;
    updated_at: string;
    created_at: string;
    homepage: string | null;
    topics: string[];
}

export async function fetchGitHubRepos(username: string): Promise<Repository[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

        if (!response.ok) {
            throw new Error(`Failed to fetch repos: ${response.statusText}`);
        }

        const repos: Repository[] = await response.json();

        return repos
            .filter(repo => !repo.fork) // Exclude forks
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars DESC
            .slice(0, 6); // Limit to top 6

    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

export async function fetchGitHubRepo(username: string, repoName: string): Promise<Repository | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

        if (!response.ok) {
            if (response.status === 404) {
                return null; // Repository not found
            }
            throw new Error(`Failed to fetch repo: ${response.statusText}`);
        }

        const repo: Repository = await response.json();
        return repo;

    } catch (error) {
        console.error("Error fetching GitHub repo:", error);
        return null;
    }
}
