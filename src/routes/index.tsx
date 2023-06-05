import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { RoutesNotAuthenticated } from './RoutesNotAuthenticated';
import { RoutesAuthenticated } from './RoutesAuthenticated';
import { ContactProvider } from '../providers/ContactProvider';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<RoutesNotAuthenticated />}>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<RoutesAuthenticated />}>
        <Route
          path="/dashboard"
          element={
            <ContactProvider>
              <Dashboard />
            </ContactProvider>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
