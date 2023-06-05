import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const RoutesAuthenticated = () => {
  const { user, globalLoading } = useUser();

  if (globalLoading) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to="/" />;
};
