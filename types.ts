
export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SitemapConfig {
  urls: string;
  baseUrl: string;
  priority: string;
  changeFreq: ChangeFreq;
  lastMod: string;
}
