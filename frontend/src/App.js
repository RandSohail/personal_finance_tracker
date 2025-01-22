import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import {
  SignUpPage,
  LoginPage,
  ProfilePage,
  LandingPage,
  TransactionsPage,
  ResetPasswordPage,
  EmailSent,
  ForgetPasswordPage,
} from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordPage />,
    },
    {
      path: "/forget-password",
      element: <ForgetPasswordPage />,
    },
    {
      path: "/email-sent",
      element: <EmailSent />,
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/transaction",
          element: <TransactionsPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // Enable the future flag here
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
