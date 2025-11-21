import React, { useState, useEffect } from 'react';

const TIPS = [
  "Ensure your sitemap is referenced in your robots.txt file.",
  "Keep your sitemap under 50,000 URLs or 50MB uncompressed.",
  "Use canonical URLs in your sitemap, not redirects.",
  "Prioritize your high-value pages with a priority of 0.8 or higher.",
  "Update 'lastmod' only when content actually changes.",
  "Don't include pages blocked by robots.txt in your sitemap.",
  "Use a Sitemap Index file if you have multiple sitemaps.",
  "Submit your sitemap URL directly to Google Search Console."
];

const SeoTips: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % TIPS.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-4 mt-6 relative overflow-hidden shadow-inner">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
      <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">Pro SEO Tip</p>
      </div>
      <p className={`text-sm text-gray-300 italic transition-opacity duration-500 min-h-[3rem] flex items-center ${fade ? 'opacity-100' : 'opacity-0'}`}>
        "{TIPS[index]}"
      </p>
    </div>
  );
};

export default SeoTips;