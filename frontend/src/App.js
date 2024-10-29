import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import { SignUpPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
