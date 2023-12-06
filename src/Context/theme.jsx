import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   const theme = isDarkMode ? "dark" : "light";
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
