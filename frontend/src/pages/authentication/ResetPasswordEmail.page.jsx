import React from "react";
import { Image } from "../../components/AntDesign";
import email from "../../assets/email.svg";
import { ResetPasswordEmailForm } from "../../components";
import "./style.css";

export default class ResetPasswordEmail extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Image src={email} className="form-image" preview={false} />
        <ResetPasswordEmailForm />
      </div>
    );
  }
}
