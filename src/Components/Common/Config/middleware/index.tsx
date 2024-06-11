import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useGetProfile } from "../../../../hooks/profile/use-http";

interface MiddlewareProps {
  children: React.ReactNode;
}

const Middleware: React.FC<MiddlewareProps> = ({ children }) => {
  const location = useLocation();

  const { data } = useGetProfile();

  const isAuthenticated = data?.getProfile.data.user._id;

  if (location.pathname.startsWith("/login")) {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
  } else if (location.pathname.startsWith("/chat")) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  }

  return <>{children}</>;
};

export default Middleware;
