import React, { ReactNode } from 'react';
import Sidebar from './Public/Nav/Sidebar';

/* import { useAuth } from '../Context/AuthContext'; */

import Navbar from './Public/Nav/Navbar';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  /* const { user: currentUser, isAuthenticated, logout } = useAuth(); */
  const isAuthenticated = false; // Replace with actual authentication logic
  /* const handleLogout = async () => {
    await logout();
  }; */


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Sticky */}
      <Navbar showSidebar={showSidebar} isAuthenticated = {isAuthenticated}     setIsSidebarOpen = {setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />
    
      {/* Sidebar - Mobile */}
      <Sidebar isAuthenticated = {isAuthenticated} isSidebarOpen={isSidebarOpen} setIsSidebarOpen = {setIsSidebarOpen}  />





      <div className="flex">

        {/* Main Content */}
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>






      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Modern App. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;