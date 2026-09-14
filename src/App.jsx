import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./contexts/GlobalContext";
import { ThemeContext } from "./contexts/ThemeContext";
import { globalState } from './components/data';
import Actions from './pages/Actions';
import WifiCard from "./pages/WifiCard";
import Header from "./components/Header";
import Switches from "./pages/Switches";
import Home from "./pages/Home";
import './App.css';

const THEME_STORAGE_KEY = 'mfweb-theme';

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [globalData, setGlobalData] = useState(globalState);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
          <Header className="head"></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/actions" element={<Actions />} />
            <Route exact path='/switches' element={<Switches />} />
            <Route exact path="/wificon" element={<WifiCard />} />
          </Routes>
        </GlobalContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
