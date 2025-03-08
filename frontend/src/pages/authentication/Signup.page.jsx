import React from "react";
import { Image } from "../../components/AntDesign";
import { SignupForm } from "../../components";
import "./style.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="page-container">
        <SignupForm />
        <div className="form-image">
          <Image src="/assets/signup.svg" preview={false} width={"70%"} />
        </div>
      </div>
    );
  }
}
