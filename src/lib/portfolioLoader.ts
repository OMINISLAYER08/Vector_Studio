// src/lib/portfolioLoader.ts



// Define the PortfolioItem type
export type PortfolioItem = {
  id: string;
  imageUrl: string;
  description: string;
  projectUrl?: string;
};

// Dynamically import the manifests. Vite handles this during build.
// These imports will be relative to the project root for module resolution.
// Ensure these paths match where generatePortfolioManifests.cjs outputs the files.
import logosManifest from '@/data/portfolio/LOGOTIPOS/manifest.json';
import sitesManifest from '@/data/portfolio/SITES/manifest.json';
import camisasManifest from '@/data/portfolio/CAMISAS/manifest.json';

// Type assertions to ensure imported JSON matches PortfolioItem[]
const loadedLogos: PortfolioItem[] = logosManifest as PortfolioItem[];
const loadedSites: PortfolioItem[] = sitesManifest as PortfolioItem[];
const loadedCamisas: PortfolioItem[] = camisasManifest as PortfolioItem[];

export const getLogos = (): PortfolioItem[] => loadedLogos;
export const getSites = (): PortfolioItem[] => loadedSites;
export const getCamisas = (): PortfolioItem[] => loadedCamisas;

// Optional: a generic function if categories are passed as strings
export const getPortfolioItems = (category: 'LOGOTIPOS' | 'SITES' | 'CAMISAS'): PortfolioItem[] => {
  switch (category) {
    case 'LOGOTIPOS':
      return loadedLogos;
    case 'SITES':
      return loadedSites;
    case 'CAMISAS':
      return loadedCamisas;
    default:
      return [];
  }
};
