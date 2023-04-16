import React from "react";
import './App.css';
import MainPage from "./pages/MainPage";
import Aim from "./pages/Aim";
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <MainPage /> */}

    <Routes>
    <Route path="/aim" element={<Aim />} />
    <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
