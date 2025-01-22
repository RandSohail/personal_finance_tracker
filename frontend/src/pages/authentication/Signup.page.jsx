import React from "react";
import { Image } from "../../components/AntDesign";
import signupImage from "../../assets/signup.svg";
import { SignupForm } from "../../components";
import "./style.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="page-container">
        <SignupForm />
        <div className="form-image">
          <Image src={signupImage} preview={false} width={"70%"} />
        </div>
      </div>
    );
  }
}
