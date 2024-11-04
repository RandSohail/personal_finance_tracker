import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/AntDesign";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <p>This is the Landing page</p>
      <Button type="primary" onClick={() => navigate("/profile")}>
        Profile Page
      </Button>
      <Button type="primary" onClick={() => navigate("/signup")}>
        Signup Page
      </Button>
      <Button type="primary" onClick={() => navigate("/login")}>
        Login Page
      </Button>
    </div>
  );
}
