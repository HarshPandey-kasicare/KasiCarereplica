import { BrowserRouter, Routes, Route } from "react-router-dom";
import AffiliateProgramSection from "./components/AffilateSection";
import "./App.css";
import Navbar from "./components/Navbar";

import Termspolicy from "./Pages/termspolicy";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/privacypolicy" element={<Termspolicy />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AffiliateProgramSection />
      </BrowserRouter>
    </>
  );
}
