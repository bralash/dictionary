import * as React from "react";
import "./FontSelector.scss";

interface IFontSelectorProps {}

const FontSelector: React.FunctionComponent<IFontSelectorProps> = (props) => {
  return (
    <div className="FontSelector">
      <select title="Font Selector">
        <option value="1">Sans Serif</option>
        <option value="2">Serif</option>
        <option value="3">Mono</option>
      </select>
    </div>
  );
};

export default FontSelector;

