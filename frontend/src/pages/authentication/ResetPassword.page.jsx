import React from "react";
import { Image } from "../../components/AntDesign";
import loginImage from "../../assets/login.svg";
import { ResetPasswordForm } from "../../components";

export default class ResetPassword extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Image src={loginImage} className="form-image" preview={false} />
        <ResetPasswordForm />
      </div>
    );
  }
}
