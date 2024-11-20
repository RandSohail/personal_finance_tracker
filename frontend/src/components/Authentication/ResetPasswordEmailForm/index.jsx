import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form } from "../../AntDesign";

export default function ResetPasswordEmail() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { email } = values;
    const response = await axiosCall("/auth/forget-password", "post", {
      email,
    });

    if (response.statusText === "OK") {
      navigate("/email-sent");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Error:", errorInfo);
  };
  return (
    <div className="container">
      <Title level={2} className="header">
        Send email to reset your password
      </Title>
      <div className="inputs-container">
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Password */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Enter your Email" />
          </Form.Item>
          {/* Reset Password Send Email Button */}
          <Form.Item>
            <Button
              type="primary"
              block
              className="form-button"
              htmlType="submit"
            >
              Send Email
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
