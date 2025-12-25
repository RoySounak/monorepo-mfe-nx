import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function ShellLayout() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear auth state + cookies
    navigate('/login'); // redirect
  };

  return (
    <div>
      {/* Global Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 16,
          borderBottom: '1px solid #ddd',
        }}
      >
        <strong>Host Shell</strong>

        {role && <button onClick={handleLogout}>Logout</button>}
      </header>

      {/* Page / Remote renders here */}
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
