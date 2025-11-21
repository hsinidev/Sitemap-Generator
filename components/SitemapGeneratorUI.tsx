import React, { useState, useEffect } from 'react';
import { generateSitemap } from '../lib/SitemapBuilder';
import { SitemapConfig, ChangeFreq } from '../types';
import SeoTips from './SeoTips';
import Toast from './Toast';

const SitemapGeneratorUI: React.FC = () => {
  const [config, setConfig] = useState<SitemapConfig>({
    urls: '',
    baseUrl: 'https://example.com',
    priority: '0.8',
    changeFreq: 'daily',
    lastMod: new Date().toISOString().split('T')[0],
  });
  const [generatedXml, setGeneratedXml] = useState<string>('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  // Stats
  const [stats, setStats] = useState({ count: 0, duplicates: 0 });

  useEffect(() => {
    const lines = config.urls.split('\n').map(u => u.trim()).filter(u => u.length > 0);
    const unique = new Set(lines);
    setStats({
        count: lines.length,
        duplicates: lines.length - unique.size
    });
  }, [config.urls]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    if (!config.urls.trim()) {
        setToast({ message: "Please enter at least one URL to generate.", type: 'error' });
        return;
    }
    const xml = generateSitemap(config);
    setGeneratedXml(xml);
    setToast({ message: "Sitemap generated successfully!", type: 'success' });
  };

  const handleDownload = () => {
    if (!generatedXml) {
        handleGenerate(); // Auto generate if empty
        if (!config.urls.trim()) return;
    }
    
    // Small delay to allow generation if it was empty
    setTimeout(() => {
        const xmlToDownload = generatedXml || generateSitemap(config);
        const blob = new Blob([xmlToDownload], { type: 'application/xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setToast({ message: "Download started.", type: 'success' });
    }, 100);
  };

  const handleCopy = () => {
    if (!generatedXml) return;
    navigator.clipboard.writeText(generatedXml).then(() => {
        setToast({ message: "XML copied to clipboard!", type: 'success' });
    });
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all URLs?")) {
        setConfig(prev => ({ ...prev, urls: '' }));
        setGeneratedXml('');
        setToast({ message: "Editor cleared.", type: 'success' });
    }
  };

  const priorityOptions = Array.from({ length: 11 }, (_, i) => (i / 10).toFixed(1));
  const changeFreqOptions: { value: ChangeFreq; label: string }[] = [
    { value: 'always', label: 'Always' },
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'never', label: 'Never' },
  ];

  return (
    <div className="w-full max-w-7xl bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Left Side: Editor & Config */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-gold rounded-full block"></span>
                Sitemap Editor
            </h2>
            <button onClick={handleClear} className="text-xs text-red-400 hover:text-red-300 uppercase tracking-wider font-bold px-2 py-1 rounded hover:bg-red-900/30 transition">
                Clear All
            </button>
        </div>

        {/* Editor Area */}
        <div className="flex-grow relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 group-hover:border-gold/50 transition-colors duration-300"></div>
            <textarea
              id="urls"
              name="urls"
              value={config.urls}
              onChange={handleInputChange}
              className="relative w-full h-96 lg:h-full bg-transparent p-4 text-gray-300 font-mono text-sm resize-none focus:outline-none z-10 placeholder-gray-600 leading-relaxed"
              placeholder={`/home\n/about-us\n/products/galaxy-s24\nhttps://mysite.com/contact\n...`}
              spellCheck={false}
            />
            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 rounded-b-lg px-4 py-2 flex justify-between items-center text-xs text-gray-400 backdrop-blur-sm z-20 border-t border-white/5">
                <div className="flex gap-4">
                    <span className={stats.count > 0 ? "text-blue-400" : ""}>URLs: {stats.count}</span>
                    {stats.duplicates > 0 && (
                        <span className="text-red-400 font-bold animate-pulse">Duplicates: {stats.duplicates}</span>
                    )}
                </div>
                <span>Line-by-line mode</span>
            </div>
        </div>

        {/* Configuration Grid */}
        <div className="bg-gray-800/40 rounded-xl p-5 border border-white/5">
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4 opacity-80">Global Settings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                    <label className="block text-xs text-gray-400 mb-1 ml-1">Base URL (Domain)</label>
                    <div className="relative">
                        <input
                        type="text"
                        name="baseUrl"
                        value={config.baseUrl}
                        onChange={handleInputChange}
                        className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-2 px-3 text-gray-200 focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all text-sm"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-xs text-gray-400 mb-1 ml-1">Priority</label>
                    <select name="priority" value={config.priority} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-2 px-3 text-gray-200 text-sm focus:ring-gold/50">
                        {priorityOptions.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-xs text-gray-400 mb-1 ml-1">Frequency</label>
                    <select name="changeFreq" value={config.changeFreq} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-2 px-3 text-gray-200 text-sm focus:ring-gold/50">
                        {changeFreqOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                </div>
            </div>
        </div>
        
        {/* Engagement Widget */}
        <SeoTips />
      </div>

      {/* Right Side: Preview & Actions */}
      <div className="flex-1 bg-black/20 p-6 sm:p-8 flex flex-col">
         <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">XML Output</h2>
            {generatedXml && (
                <button onClick={handleCopy} className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-white transition-colors bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy Code
                </button>
            )}
        </div>

        <div className="flex-grow relative rounded-xl overflow-hidden border border-gray-700 bg-[#1e1e1e] shadow-inner mb-6">
            <div className="absolute top-0 left-0 right-0 h-8 bg-[#252526] border-b border-[#3e3e42] flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <span className="ml-2 text-xs text-gray-500 font-mono">sitemap.xml</span>
            </div>
            <textarea
                readOnly
                value={generatedXml || '<!-- Click Generate to see result -->'}
                className="w-full h-full pt-12 pb-4 px-4 bg-transparent text-green-400 font-mono text-xs sm:text-sm resize-none focus:outline-none leading-relaxed"
            />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
            <button
                onClick={handleGenerate}
                className="col-span-2 sm:col-span-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                Generate XML
            </button>
            <button
                onClick={handleDownload}
                className="col-span-2 sm:col-span-1 bg-gold text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-yellow-300 hover:shadow-gold/30 transition-all transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download File
            </button>
        </div>
      </div>
    </div>
  );
};

export default SitemapGeneratorUI;