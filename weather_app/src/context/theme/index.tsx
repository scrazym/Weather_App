import { createContext, useContext, useEffect, useState } from "react";

import Styles from "./theme.module.css";
const StorageKey = "features-color-theme";
const supportedThemes = {
  light: "light",
  dark: "dark",
};

type Themes = keyof typeof supportedThemes;

const ThemeContext = createContext<
  | {
      theme: Themes;
      setTheme: (theme: Themes) => void;
      supportedThemes: { [key: string]: string };
    }
  | undefined
>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'You can use "useTheme" hook only within a <ThemeProvider> component.'
    );
  }

  return context;
};

const getTheme = (): Themes => {
  let theme = localStorage.getItem(StorageKey);

  if (!theme) {
    localStorage.setItem(StorageKey, "light");
    theme = "light";
  }

  return theme as Themes;
};

const Theme = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(getTheme);

  useEffect(() => {
    localStorage.setItem(StorageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

Theme.SimpleToggler = function SimpleToggler() {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={Styles.simpleToggler} onClick={handleSwitchTheme}>
      <div className={Styles.ball} data-theme={theme} />
    </div>
  );
};

export { useTheme };
export default Theme;
