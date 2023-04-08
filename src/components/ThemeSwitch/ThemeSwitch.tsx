import * as React from "react";
import "./ThemeSwitch.scss";
import { BiMoon } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

interface IThemeSwitchProps {}

const ThemeSwitch: React.FunctionComponent<IThemeSwitchProps> = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeSwitch = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };
  
  return (
    <div className="theme">
      <label className="switch">
        <input type="checkbox" title="Theme" onChange={handleThemeSwitch} checked={theme === 'dark'} />
        <span className="slider round"></span>
      </label>
      <BiMoon size={20} color={theme === 'dark' ? '#A445ED': '#757575'}/>
    </div>
  );
};

export default ThemeSwitch;
