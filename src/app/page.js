"use client"; // This directive marks the component as a Client Component

import React, { useState, useEffect } from 'react';
// Pages
import AnnouncementsPage from './pages/AnnouncementsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'; 
import MembersPage from './pages/MembersPage';
import TasksPage from './pages/TasksPage';
import WorkshopsPage from './pages/WorkshopsPage';
import SummerSchoolPage from './pages/SummerSchoolPage';
// Components
import Navbar from './components/Navbar';


// Main App Component
const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('login'); // Default to login page

  // Effect to load user role from storage (e.g., localStorage in a real app, or context)
  useEffect(() => {
    // In a real Next.js app, you might use a context provider or more sophisticated auth
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
      setCurrentPage('dashboard'); // Redirect to dashboard if logged in
    }
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
    setCurrentPage('dashboard'); // Always redirect to dashboard after login
    localStorage.setItem('userRole', role); // For persistence
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('login');
    localStorage.removeItem('userRole'); // Clear stored role
  };

  const handleNavigate = (path) => {
    setCurrentPage(path);
  };

  const renderPage = () => {
    if (!userRole) {
      return <LoginPage onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage userRole={userRole} />;
      case 'workshops':
        return <WorkshopsPage />;
      case 'summer-school':
        return <SummerSchoolPage />;
      case 'tasks':
        return <TasksPage />;
      case 'members':
        return <MembersPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      default:
        return <DashboardPage userRole={userRole} />; // Fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter {
            font-family: 'Inter', sans-serif;
        }
        `}
      </style>
      <Navbar userRole={userRole} currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout} />
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

