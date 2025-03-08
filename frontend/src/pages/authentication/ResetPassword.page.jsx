import React from "react";
import { Image } from "../../components/AntDesign";
import { ResetPasswordForm } from "../../components";

export default class ResetPassword extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Image src="/assets/login.svg" className="form-image" preview={false} />
        <ResetPasswordForm />
      </div>
    );
  }
}
