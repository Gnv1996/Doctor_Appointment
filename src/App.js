import React from "react";
import Patients from "./Component/Screen/PatientScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Component/Screen/LoginScreen";
import { Sidebar } from "./Component/Navigator/Sidebar";
import HomeScreen from "./Component/Screen/HomeScreen";

function App() {
  return (
    <div className="text-gray-600 body-font">
      <Router>
        <div
          className="absolute inset-0 bg-white-300 w-80 fixed"
          style={{ position: "fixed" }}
        >
          <Sidebar />
        </div>
        <div className="container ml-40">
          <Routes>
            <Route path="home" element={<HomeScreen />} />
            <Route path="Patients" element={<Patients />} />
            <Route path="Login" element={<LoginScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
