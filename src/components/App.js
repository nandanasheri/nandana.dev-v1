import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import Experience from "../views/Experience";
import Projects from "../views/Projects";
import Leadership from "../views/Leadership";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/leadership" element={<Leadership/>} />
      </Routes>
    </BrowserRouter>
  );
}