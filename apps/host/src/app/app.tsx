import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { loadRemote } from '../mf/loadRemote';
import { ShellLayout } from './ShellLayout';
import { useAuth } from '../auth/AuthContext';
import Landing from './Landing';
import LoginPage from './LoginPage';

const OwnerApp = React.lazy(() => loadRemote('owner'));

export default function App() {
  const { role, token } = useAuth();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<div>403 Unauthorized</div>} />

        {/* Protected shell */}
        <Route element={<ShellLayout />}>
          <Route
            path="/owner"
            element={
              <ProtectedRoute allowedRoles={['OWNER']}>
                <OwnerApp role={role} token={token} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <div>Admin Remote Placeholder</div>
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  );
}
