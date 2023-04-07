import * as React from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="options">
        <select name="font" id="font" title="Select Font">
          <option value="">Sans Serif</option>
          <option value="">Serif</option>
          <option value="">Mono</option>
        </select>

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
