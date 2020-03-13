import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode",{setDark:false});
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1 className="title">Soccer Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default DarkModeToggle;
