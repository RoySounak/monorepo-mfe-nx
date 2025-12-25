import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Landing() {
  const { role, token } = useAuth();

  // Not authenticated → Login
  if (!role || !token) {
    return <Navigate to="/login" replace />;
  }

  // Role-based routing
  switch (role) {
    case 'OWNER':
      return <Navigate to="/owner" replace />;

    case 'ADMIN':
      return <Navigate to="/admin" replace />;

    default:
      return <Navigate to="/unauthorized" replace />;
  }
}
