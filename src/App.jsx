import { createContext, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Actions from './pages/Actions';
import WifiCard from "./pages/WifiCard";
import Header from "./components/Header";
import Switches from "./pages/Switches";
import './App.css'

const SettingsContext = createContext(null);

function App() {
  return (
    <>
      <SettingsContext.Provider value="dark">

        <Header></Header>
        <Routes>
          <Route exact path="/actions" element={<Actions />} />
          <Route exact path='/switches' element={<Switches />} />
          <Route exact path="/wificon" element={<WifiCard />} />
        </Routes>
      </SettingsContext.Provider>
    </>
  )
}

export default App
