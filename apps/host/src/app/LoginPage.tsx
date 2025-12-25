import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function LoginPage() {
  const { role, token, login } = useAuth();

  // Already logged in → Landing decides destination
  if (role && token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: 32, border: '1px solid #ddd' }}>
        <h2>Login</h2>
        <p>Select role to simulate authentication</p>

        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <button onClick={() => login('owner-token', 'OWNER')}>
            Login as OWNER
          </button>

          <button onClick={() => login('admin-token', 'ADMIN')}>
            Login as ADMIN
          </button>
        </div>
      </div>
    </div>
  );
}
