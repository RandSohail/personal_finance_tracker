import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/routes/PrivateRoutes";
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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
        <Route
          path="/reset-password-email"
          element={<ResetPasswordEmailPage />}
        ></Route>
        <Route path="/email-sent" element={<EmailSent />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/transaction" element={<TransactionsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
