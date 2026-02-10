/**
 * Configuración de categorías - sincronizado desde UniSync
 * Este archivo se genera automáticamente. No editar manualmente.
 * Última sincronización: 2026-02-10T01:52:01.357Z
 */

export interface CategoryConfig {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
}

export const categories: Record<string, CategoryConfig> = {
  'ciberseguridad': {
    slug: 'ciberseguridad',
    name: 'Ciberseguridad',
    shortName: 'Ciberseguridad',
    description: 'Seguridad informática, hacking ético y protección de datos',
    color: '#14b8a6'
  },
  'crypto': {
    slug: 'crypto',
    name: 'Criptomonedas',
    shortName: 'Criptomonedas',
    description: 'Bitcoin, Ethereum, DeFi y el mundo blockchain',
    color: '#f59e0b'
  },
  'ia': {
    slug: 'ia',
    name: 'Inteligencia Artificial',
    shortName: 'IA',
    description: 'Noticias y análisis sobre IA, machine learning y automatización',
    color: '#3b82f6'
  },
};

export function getCategory(slug: string): CategoryConfig | undefined {
  return categories[slug];
}

export function getCategoryColor(slug: string): string {
  return categories[slug]?.color || '#6B7280';
}

export function getCategoryShortName(slug: string): string {
  return categories[slug]?.shortName || slug;
}

export function getCategoryName(slug: string): string {
  return categories[slug]?.name || slug;
}
