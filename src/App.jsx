

import './App.css'
import Header from './components/Header/Header'
// import * as React from "react";
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';






function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Header toogleTheme={toggleTheme} />
      <Outlet />
    </div>
  )
}

export default App
