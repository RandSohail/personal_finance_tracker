import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignUpPage,
  LoginPage,
  ProfilePage,
  LandingPage,
  TransactionsPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/transaction" element={<TransactionsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
