import { useContext,createContext,useState,useEffect } from "react";

export const ThemeContext = createContext({
    darkMode: false
})

const ThemeProvider = ({children}) => {
      const [darkMode, setDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }
  //  default to dark
  return true;
});


  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider