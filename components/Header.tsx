import React, { useState } from 'react';
import Modal from './Modal';
import { SeoArticle } from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface HeaderProps {
    showNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNav = true }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const navLinks: { name: string; modal: ModalType }[] = [
    { name: 'Guide', modal: 'guide' },
    { name: 'About', modal: 'about' },
    { name: 'Contact', modal: 'contact' },
    { name: 'Privacy', modal: 'privacy' },
    { name: 'Terms', modal: 'terms' },
    { name: 'DMCA', modal: 'dmca' },
  ];

  const CautionBox = () => (
      <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r mb-6">
          <div className="flex items-start">
              <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
              </div>
              <div className="ml-3">
                  <h3 className="text-sm font-bold text-red-400 uppercase tracking-wide">Google Compliance Warning</h3>
                  <div className="mt-2 text-sm text-gray-300">
                      <p>
                          Google and other search engines require accurate information. Misusing sitemaps (e.g., listing non-existent URLs, keyword stuffing, or manipulating priority tags deceptively) can result in manual actions or penalties.
                      </p>
                      <p className="mt-1">
                          <strong>You are responsible for the data you generate.</strong> Ensure your sitemap reflects your actual site structure.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );

  const getModalContent = (modal: ModalType) => {
    switch (modal) {
        case 'guide':
            return (
                <div className="space-y-4">
                    <CautionBox />
                    <SeoArticle />
                </div>
            );
        case 'about':
            return (
                <div className="space-y-4 text-gray-300">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">About Sitemap Generator Pro</h3>
                    </div>
                    <p>
                        Welcome to <strong>doodax.com</strong>. We are dedicated to providing accessible, high-quality SEO tools for the modern web.
                    </p>
                    <p>
                        This application helps you generate XML sitemaps compliant with the sitemaps.org protocol. It is built with performance and privacy in mind, ensuring that your data remains local to your device.
                    </p>
                </div>
            );
        case 'contact':
            return (
                <div className="space-y-6 text-gray-300">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
                        <p className="text-sm text-gray-400">We'd love to hear from you.</p>
                    </div>
                    
                    <div className="grid gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-4">
                            <div className="bg-blue-900/30 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Email Support</p>
                                <a href="mailto:hsini.web@gmail.com" className="text-white font-medium hover:text-gold">hsini.web@gmail.com</a>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-4">
                             <div className="bg-purple-900/30 p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Official Website</p>
                                <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-gold">www.doodax.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'privacy':
            return (
                <div className="space-y-4 text-sm text-gray-300">
                    <CautionBox />
                    <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                    <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                    <p>At doodax.com, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors.</p>
                    <h4 className="font-bold text-gold">Information We Collect</h4>
                    <p>The functionality of the Sitemap Generator is client-side. We do not harvest your URLs. Any data you input remains in your browser's local memory.</p>
                    <h4 className="font-bold text-gold">Log Files</h4>
                    <p>We follow a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp.</p>
                </div>
            );
        case 'terms':
            return (
                <div className="space-y-4 text-sm text-gray-300">
                    <CautionBox />
                    <h3 className="text-xl font-bold text-white">Terms of Service</h3>
                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Sitemap Generator Pro if you do not agree to take all of the terms and conditions stated on this page.</p>
                    <h4 className="font-bold text-gold">Cookies</h4>
                    <p>We employ the use of cookies. By accessing Sitemap Generator Pro, you agreed to use cookies in agreement with the Privacy Policy.</p>
                    <h4 className="font-bold text-gold">License</h4>
                    <p>Unless otherwise stated, HSINI MOHAMED and/or its licensors own the intellectual property rights for all material on Sitemap Generator Pro.</p>
                </div>
            );
        case 'dmca':
            return (
                <div className="space-y-4 text-sm text-gray-300">
                    <h3 className="text-xl font-bold text-white">DMCA Notice</h3>
                    <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify our copyright agent as set forth in the Digital Millennium Copyright Act of 1998 (DMCA).</p>
                    <div className="bg-gray-800 p-4 rounded border border-gray-600">
                        <p className="font-bold">Designated Agent:</p>
                        <p>HSINI MOHAMED</p>
                        <p>Email: <a href="mailto:hsini.web@gmail.com" className="text-blue-400 underline">hsini.web@gmail.com</a></p>
                    </div>
                </div>
            );
        default:
            return null;
    }
  };

  const getModalTitle = (modal: ModalType) => {
    const link = navLinks.find(l => l.modal === modal);
    return link ? link.name : '';
  };

  return (
    <>
      <header className="py-6 px-4 md:px-8 w-full relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href='/'}>
             <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gold rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-full border border-gold/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
            </div>
            <div className="flex flex-col">
                {/* Changed H1 to Div to allow Home page H1 to take SEO precedence */}
                <div className="text-2xl font-bold text-white tracking-tight leading-none group-hover:text-gold transition-colors">Sitemap Pro</div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">by doodax.com</span>
            </div>
          </div>
          
          {showNav && (
            <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-black/20 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5 shadow-xl">
                {navLinks.map((link) => (
                <button 
                    key={link.name}
                    onClick={() => setActiveModal(link.modal)}
                    className="px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium focus:outline-none focus:ring-1 focus:ring-gold/50"
                >
                    {link.name}
                </button>
                ))}
            </nav>
          )}
        </div>
      </header>
      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        title={getModalTitle(activeModal)}
      >
        <div className="text-gray-300">
          {getModalContent(activeModal)}
        </div>
      </Modal>
    </>
  );
};

export default Header;