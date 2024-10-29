import React from "react";
import { Image } from "../../components/AntDesign";
import signupImage from "../../assets/signup.svg";
import { SignupForm } from "../../components";
import "./style.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Image src={signupImage} className="form-image" preview={false} />
        <SignupForm />
      </div>
    );
  }
}
