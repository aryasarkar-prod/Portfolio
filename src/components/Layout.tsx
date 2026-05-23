import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 dark:bg-gray-950 text-white relative">
      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
