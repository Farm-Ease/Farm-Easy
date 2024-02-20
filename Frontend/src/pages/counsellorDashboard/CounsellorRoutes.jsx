import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const CounsellorRoutes = ({ children }) => {
  const { role } = useAuth();

  // let location = useLocation();
  if (role === 'counsellor') {
    return children;
  } else {
    return <Navigate to='/counsellorLogin' />;
  }
};

export default CounsellorRoutes;