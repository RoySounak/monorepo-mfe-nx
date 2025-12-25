import React, { createContext, useContext, useEffect, useState } from 'react';

export type Role = 'ADMIN' | 'OWNER' | 'USER';

interface AuthState {
  token: string | null;
  role: Role | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (token: string, role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('auth');
    if (saved) {
      const parsed = JSON.parse(saved);
      setToken(parsed.token);
      setRole(parsed.role);
    }
  }, []);

  const login = (token: string, role: Role) => {
    setToken(token);
    setRole(role);
    localStorage.setItem('auth', JSON.stringify({ token, role }));
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
