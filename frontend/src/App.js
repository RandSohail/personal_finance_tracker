import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignUpPage,
  LoginPage,
  ProfilePage,
  LandingPage,
  TransactionsPage,
  ResetPasswordPage,
  EmailSent,
  ResetPasswordEmailPage,
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
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
        <Route
          path="/reset-password-email"
          element={<ResetPasswordEmailPage />}
        ></Route>
        <Route path="/email-sent" element={<EmailSent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
