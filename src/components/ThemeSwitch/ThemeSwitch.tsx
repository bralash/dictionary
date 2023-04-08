import * as React from "react";
import './ThemeSwitch.css'
import { BiMoon } from 'react-icons/bi'

interface IThemeSwitchProps {}

const ThemeSwitch: React.FunctionComponent<IThemeSwitchProps> = (props) => {
  return (
    <div className="theme">
      <label className="switch">
        <input type="checkbox" title="Theme" />
        <span className="slider round"></span>
      </label>

      <BiMoon size={20} />
    </div>
  );
};

export default ThemeSwitch;
