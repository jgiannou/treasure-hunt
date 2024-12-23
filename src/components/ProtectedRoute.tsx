import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, hasCompletedRiddle } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!hasCompletedRiddle && location.pathname === "/clue") {
    return <Navigate to="/riddle" />;
  }

  return children;
};
