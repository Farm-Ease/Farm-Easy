import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const FarmerRoutes = ({ children }) => {
  const { role } = useAuth();

  // let location = useLocation();
  if (role === 'user') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default FarmerRoutes;