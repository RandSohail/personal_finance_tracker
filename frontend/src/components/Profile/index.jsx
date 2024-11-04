import React from "react";
import { Title } from "../AntDesign";
import RandomAvatar from "../randomAvatare";

import "./style.css";

export default function Profile() {
  const name = "Rand Sohail";
  return (
    <div className="profile-container">
      <Title level={2} className="profile-welcome">
        Welcome, {name.con}
      </Title>
      <RandomAvatar />
      <p>name</p>
      <p>email</p>
      <p>image</p>
    </div>
  );
}
