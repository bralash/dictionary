import * as React from "react";
import logo from "../../assets/images/logo.svg";
import FontSelector from "../FontSelector/FontSelector";
import "./Header.css";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="options">
        <FontSelector />

        <div className="theme">
          <label className="switch">
            <input type="checkbox" title="Theme" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
