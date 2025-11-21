import React from 'react';
import GalaxyBackground from './GalaxyBackground';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNav }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-x-hidden">
      <GalaxyBackground />
      <div className="relative z-10 w-full flex flex-col items-center flex-grow">
        <Header showNav={showNav} />
        <main className="container mx-auto px-4 py-8 flex-grow w-full flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
