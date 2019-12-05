import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = key => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  const darkModeClass = "dark-mode";

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add(darkModeClass);
    } else {
      document.body.classList.remove(darkModeClass);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
