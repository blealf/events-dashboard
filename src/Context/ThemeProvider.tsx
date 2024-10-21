import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({
  toggleTheme: () => {},
  darkMode: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    if (darkMode) {
      document.getElementsByTagName("html")[0].classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};