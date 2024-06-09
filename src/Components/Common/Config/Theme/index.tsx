import React, { useState, useEffect, createContext, useContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useDarkSide = (): [string, () => void] => {
  const [theme, setTheme] = useState<string>(localStorage.theme || "light");

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.removeAttribute("data-theme");
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, toggleTheme] = useDarkSide();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
