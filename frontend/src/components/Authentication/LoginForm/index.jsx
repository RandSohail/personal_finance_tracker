import React from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form, message } from "../../AntDesign";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { password } = values;
    const email = values.email.toLowerCase();
    const response = await axiosCall("/auth/login", "post", {
      email,
      password,
    });

    if (response && response.statusText === "OK") {
      navigate("/profile");
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.message);
  };

  return (
    <div className="container">
      <Title level={2} className="header">
        Login
      </Title>
      <div className="inputs-container">
        <Form
          layout="vertical"
          name="basic"
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
            <Input placeholder="Enter your email" />
          </Form.Item>
          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          {/* Login Button */}
          <Form.Item>
            <Button
              type="primary"
              block
              className="form-button"
              htmlType="submit"
              style={{ marginBottom: "20px" }}
            >
              Login
            </Button>
            <Link to="/reset-password-email" style={{ color: "#747474" }}>
              Forget Password?
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
