import { Navigate } from 'react-router-dom';
import { useAuth, Role } from './AuthContext';

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.JSX.Element;
  allowedRoles: Role[];
}) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
