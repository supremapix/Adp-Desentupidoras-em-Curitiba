import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;