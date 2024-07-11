import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactPage } from "./pages/ContactPage";
import { EduPage } from "./pages/EduPage";
import { HomePage } from './pages/HomePage';
import { ProjPage } from "./pages/ProjPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/experience" element={<WorkPage />} />
        <Route path="/education" element={<EduPage />} />
        <Route path="/projects" element={<ProjPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
