import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import LocalContactCard from './LocalContactCard';
import FloatingCTA from './FloatingCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />
      <main id="conteudo" tabIndex={-1} className="flex-grow pb-20 md:pb-0">
        {children}
      </main>
      <LocalContactCard /><Footer />
      <FloatingCTA /><FloatingActions />
    </div>
  );
};

export default Layout;
