import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form, Card, message } from "../../AntDesign";

export default function ForgetPasswordEmail() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email } = values;
      const response = await axiosCall("/auth/forget-password", "post", {
        email,
      });

      if (response.statusText === "OK") {
        message.success("Password reset email sent successfully!");
        navigate("/email-sent");
      } else {
        throw new Error(response?.data?.message || "Failed to send email");
      }
    } catch (error) {
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
    message.error("Please check the form fields for errors.");
  };

  return (
    <div className="container">
      <Card bordered style={{ marginTop: "100px" }}>
        <Title level={3} className="header">
          Send Email to Reset Your Password
        </Title>
        <div className="inputs-container">
          <Form
            layout="vertical"
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Email */}
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
                loading={loading}
              >
                Send Email
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}
