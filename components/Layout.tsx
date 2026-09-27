import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
