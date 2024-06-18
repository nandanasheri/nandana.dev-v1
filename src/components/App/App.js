import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../views/LandingPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}