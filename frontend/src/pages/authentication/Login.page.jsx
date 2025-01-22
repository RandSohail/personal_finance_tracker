import React from "react";
import { Image } from "../../components/AntDesign";
import loginImage from "../../assets/login.svg";
import { LoginForm } from "../../components";
import "./style.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="page-container">
        <LoginForm />
        <div className="form-image">
          <Image src={loginImage} preview={false} style={{ width: "150%" }} />
        </div>
      </div>
    );
  }
}
