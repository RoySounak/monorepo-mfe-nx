import React from 'react';

type OwnerAppProps = {
  role?: string | null;
  token?: string | null;
  logout?: () => void;
};

/**
 * OwnerApp no longer imports host/AuthContext to avoid a circular dependency.
 * Instead it accepts auth data via props; the host application should pass
 * the auth object when mounting this remote. For local/dev convenience there
 * is a fallback to window.__AUTH__ if present.
 */
export default function OwnerApp({ role, token, logout }: OwnerAppProps) {
  const displayRole =
    role ??
    (typeof window !== 'undefined'
      ? (window as any).__AUTH__?.role
      : undefined);
  const displayToken =
    token ??
    (typeof window !== 'undefined'
      ? (window as any).__AUTH__?.token
      : undefined);

  return (
    <div>
      <h2>Owner Remote Prod Testing Individual</h2>
      <p>Role: {displayRole}</p>
      <p>Token: {displayToken}</p>
      {logout && <button onClick={logout}>Logout</button>}
    </div>
  );
}
