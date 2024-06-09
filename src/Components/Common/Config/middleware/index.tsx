import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/Authentication";

interface MiddlewareProps {
  children: React.ReactNode;
}

const Middleware: React.FC<MiddlewareProps> = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (location.pathname.startsWith("/login")) {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  } else if (location.pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  }

  return <>{children}</>;
};

export default Middleware;
