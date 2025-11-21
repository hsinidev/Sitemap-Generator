
import { SitemapConfig } from '../types';

const escapeXml = (unsafe: string): string => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

export const generateSitemap = (config: SitemapConfig): string => {
  const { urls, baseUrl, priority, changeFreq, lastMod } = config;

  const urlEntries = urls
    .split('\n')
    .map(url => url.trim())
    .filter(url => url.length > 0);

  const urlTags = urlEntries.map(url => {
    let finalUrl = url;
    try {
        // Check if the URL is relative or absolute
        new URL(url);
    } catch (_) {
        // If it's a relative URL, prepend the base URL
        const trimmedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        const trimmedUrl = url.startsWith('/') ? url.slice(1) : url;
        finalUrl = `${trimmedBaseUrl}/${trimmedUrl}`;
    }

    return `
  <url>
    <loc>${escapeXml(finalUrl)}</loc>
    ${lastMod ? `<lastmod>${lastMod}</lastmod>` : ''}
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlTags}
</urlset>`;
};
