import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./themeContext";
import {useContext} from "react";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Themes
}

export const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    theme,
    toggleTheme
  }
}
