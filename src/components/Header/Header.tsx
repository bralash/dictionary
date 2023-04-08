import * as React from "react";
import logo from "../../assets/images/logo.svg";
import FontSelector from "../FontSelector/FontSelector";
import "./Header.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="options">
        <FontSelector />

        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
