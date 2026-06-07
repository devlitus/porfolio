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

const FALLBACK_REPOS: Repository[] = [
    { id: 1, name: "chat", description: "Una aplicación web moderna de chat con IA construida con Astro 5, React, y Groq API. MVP funcional con persistencia local, streaming en tiempo real y diseño responsivo.", html_url: "https://github.com/devlitus/chat", stargazers_count: 1, language: "TypeScript", fork: false, updated_at: "", created_at: "2026-01-31", homepage: "https://chat-teal-ten-21.vercel.app", topics: [] },
    { id: 2, name: "csvviewer", description: "csvviewer es una herramienta diseñada para visualizar y explorar archivos CSV de manera rápida y sencilla.", html_url: "https://github.com/devlitus/csvviewer", stargazers_count: 1, language: "TypeScript", fork: false, updated_at: "", created_at: "2026-01-17", homepage: "https://csvviewer-v2.vercel.app", topics: [] },
    { id: 3, name: "galleryImageSD", description: "Aplicación web para gestionar y mostrar imágenes con Astro y Cloudinary. Modo oscuro/claro y drag & drop.", html_url: "https://github.com/devlitus/galleryImageSD", stargazers_count: 1, language: "TypeScript", fork: false, updated_at: "", created_at: "2024-11-18", homepage: "https://gallery-image-sd.vercel.app", topics: [] },
    { id: 4, name: "repos-deep-learning", description: "Repositorio dedicado al estudio e implementación de técnicas y algoritmos de aprendizaje profundo (Deep Learning).", html_url: "https://github.com/devlitus/repos-deep-learning", stargazers_count: 1, language: "Jupyter Notebook", fork: false, updated_at: "", created_at: "2025-10-05", homepage: "", topics: [] },
    { id: 5, name: "travel-web", description: "Travel Web es un generador de itinerarios de viaje personalizado que utiliza IA (Gemini) para crear planes detallados.", html_url: "https://github.com/devlitus/travel-web", stargazers_count: 1, language: "TypeScript", fork: false, updated_at: "", created_at: "2025-07-17", homepage: "https://travel-web-ashen-chi.vercel.app", topics: [] },
    { id: 6, name: "acp-agent", description: "Agente ACP con TypeScript.", html_url: "https://github.com/devlitus/acp-agent", stargazers_count: 0, language: "TypeScript", fork: false, updated_at: "", created_at: "2026-04-11", homepage: null, topics: [] },
];

export async function fetchGitHubRepos(username: string): Promise<Repository[]> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

        if (!response.ok) {
            throw new Error(`Failed to fetch repos: ${response.statusText}`);
        }

        const repos: Repository[] = await response.json();

        return repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return FALLBACK_REPOS;
    }
}

export async function fetchGitHubRepo(username: string, repoName: string): Promise<Repository | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Failed to fetch repo: ${response.statusText}`);
        }

        const repo: Repository = await response.json();
        return repo;

    } catch (error) {
        console.error("Error fetching GitHub repo:", error);
        return FALLBACK_REPOS.find(r => r.name.toLowerCase() === repoName.toLowerCase()) ?? null;
    }
}
