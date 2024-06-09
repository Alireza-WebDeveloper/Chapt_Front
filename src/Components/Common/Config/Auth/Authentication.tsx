// !! Package
import React, { createContext, useContext, useState, ReactNode } from "react";

// !! Type
interface LogState {
  email: string;
  password: string;
}

interface UserState {
  email: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserState | null;
  login: (userData: LogState) => void;
  logout: () => void;
}

const AuthContextDefaultValues: AuthContextType = {
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
};

// ?? Context

const AuthContext = createContext<AuthContextType>(AuthContextDefaultValues);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState | null>(null);

  const login = (userData: LogState) => {
    console.log(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Data Context
const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };

export default AuthProvider;
