import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { ScrollToTop } from '../../common/ScrollToTop';

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-base overflow-x-hidden">
      {/* Scroll indicator/floating reset */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
