import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <button
      className="toggle-theme"
      onClick={toggleTheme}
      style={{ background: theme.bg, color: theme.syntax }}
    >
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
