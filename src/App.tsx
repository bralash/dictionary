import { useState } from "react";
import "./App.scss";

import { ThemeContext } from "./contexts/theme-context";

import Header from "./components/Header/Header";

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = ():string => {
    const localStorageTheme = localStorage.getItem('theme');
    const isBrowserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || isBrowserDefault
  }

  const [theme, setTheme] = useState(getDefaultTheme());

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
