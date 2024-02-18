import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [role, setRole] = useState(getRole());

  function getRole() {
    if (localStorage.getItem('role')) {
      return localStorage.getItem('role');
    }
    return '';
  }

  const setNewRole = (newRole) =>{
    setRole(newRole);
    localStorage.setItem("role",newRole);
  }

  const value = {
    role,
    setNewRole,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}