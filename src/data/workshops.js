import { aiEngineering } from './ai-engineering.js';
import { fullstackDevelopment } from './fullstack-development.js';
import { devopsInfrastructure } from './devops-infrastructure.js';
import { dataEngineering } from './data-engineering.js';
import { technicalLeadership } from './technical-leadership.js';

export const workshops = [
  aiEngineering,
  fullstackDevelopment,
  devopsInfrastructure,
  dataEngineering,
  technicalLeadership
];

// Helper function to get workshop by slug
export function getWorkshopBySlug(slug) {
  for (const category of workshops) {
    const workshop = category.workshops.find(w => w.slug === slug);
    if (workshop) return workshop;
  }
  return undefined;
}

// Helper function to get all workshops as flat array
export function getAllWorkshops() {
  return workshops.flatMap(category => category.workshops);
}

// Helper function to get workshops by track
export function getWorkshopsByTrack(trackSlug) {
  if (trackSlug === 'all') return workshops;
  return workshops.filter(category => category.tracks.includes(trackSlug));
}

// Helper function to get workshops by category
export function getWorkshopsByCategory(categoryName) {
  return workshops.find(category => category.category === categoryName);
}