import React from "react";
import { Image } from "../../components/AntDesign";
import email from "../../assets/email.svg";
import { ResetPasswordEmailForm } from "../../components";
import "./style.css";

export default class ForgerPassword extends React.Component {
  render() {
    return (
      <div className="page-container">
        <ResetPasswordEmailForm />
        <div className="form-image" style={{ marginTop: "60px" }}>
          <Image src={email} preview={false} />
        </div>
      </div>
    );
  }
}
