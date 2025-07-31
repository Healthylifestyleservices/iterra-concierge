import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiresAuth = false }) => {
  // Check for auth bypass for iTerra users
  const bypassAuth = localStorage.getItem('bypassAuth') === 'true';
  const hasToken = localStorage.getItem('userToken') !== null;
  const isAuthenticated = hasToken || bypassAuth;
  
  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;