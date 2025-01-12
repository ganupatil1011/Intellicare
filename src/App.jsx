import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Navbarr from "./Components/Navbarr";
import LoginSignup from "./pages/LoginSignupPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import DashboardPage from "./Pages/DashboardPage";
import PatientFormPage from "./Pages/PatientFormPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patient-form" element={<PatientFormPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
