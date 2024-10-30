import React from "react";
import { Image } from "../../components/AntDesign";
import loginImage from "../../assets/login.svg";
import { LoginForm } from "../../components";
import "./style.css";

export default class Login extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Image src={loginImage} className="form-image" preview={false} />
        <LoginForm />
      </div>
    );
  }
}
