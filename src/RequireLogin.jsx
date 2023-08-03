import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from './auth/AuthProvider';
import { useContext } from 'react';

export default function RequireLogin() {
  const { session } = useContext(AuthContext);

  return session ? <Outlet /> : <Navigate to="/" />;
}
