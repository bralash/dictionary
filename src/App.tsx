import { useState } from "react";
import "./App.scss";

import { ThemeContext } from "./contexts/theme-context";

import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <div className="wrapper">
            <Header />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
