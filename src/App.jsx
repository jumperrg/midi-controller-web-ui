import { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./contexts/GlobalContext";
import { globalState } from './components/data';
import Actions from './pages/Actions';
import WifiCard from "./pages/WifiCard";
import Header from "./components/Header";
import Switches from "./pages/Switches";
import Home from "./pages/Home";
import './App.css';

function App() {
  const [globalData, setGlobalData] = useState(globalState);

  return (
    <>
      <GlobalContext.Provider value={{ globalData, setGlobalData }}>
        <Header className="head"></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/actions" element={<Actions />} />
          <Route exact path='/switches' element={<Switches />} />
          <Route exact path="/wificon" element={<WifiCard />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  )
}

export default App
