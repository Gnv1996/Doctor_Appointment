import React from "react";
import Patients from "./Component/Screen/PatientScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Component/Screen/LoginScreen";
import { Sidebar } from "./Component/Navigator/Sidebar";

function App() {
  return (
    <div className="text-gray-600 body-font relative">
      <Router>
        <div className="absolute inset-0 bg-white-300 w-80">
          <Sidebar />
        </div>
        <div
          className="container px-5 py-24 mx-auto flex"
          style={{ paddingLeft: "150px" }}
        >
          <Routes>
            <Route path="Patients" element={<Patients />} />
            <Route path="Login" element={<LoginScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
