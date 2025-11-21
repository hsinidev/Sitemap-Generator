import React from 'react';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 w-full max-w-5xl">
      <div className="relative">
        {/* Glow effect behind title */}
        <div className="absolute -inset-10 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-2xl">
          Free Sitemap Generator <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">SEO Made Friendly</span>
        </h1>
      </div>
      
      <p className="mt-2 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
        Welcome to <span className="font-bold text-white">doodax.com</span>. We've built a comfortable, private space for you to generate Google-compliant XML sitemaps without the technical headaches.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
        <button
          onClick={onGetStarted}
          className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Generating
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button
          onClick={() => (document.querySelector('header nav button') as HTMLElement)?.click()}
          className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300"
        >
          Read Guide
        </button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-sm text-gray-400">
        <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <span>100% Private & Secure</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-pink-500/10 rounded-full text-pink-400">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span>Instant Generation</span>
        </div>
        <div className="flex flex-col items-center gap-2">
             <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
            <span>Browser Based</span>
        </div>
      </div>
    </div>
  );
};

export default Home;