import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form } from "../../AntDesign";
import "./style.css";

export default function Signup() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, password } = values;
    const email = values.email.toLowerCase();
    const response = await axiosCall("/auth/signup", "post", {
      name,
      email,
      password,
    });

    if (response.statusText === "OK") {
      // TODO: navigate to a correct page
      // TODO: add the JWT
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Error:", errorInfo);
  };
  return (
    <div className="container">
      <Title level={2} className="header">
        Sign Up a new account
      </Title>
      <div className="inputs-container">
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Username  */}
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
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
          {/* Confirm Password */}
          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
            className="input-password"
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          {/* Sign up Button */}
          <Form.Item>
            <Button
              type="primary"
              block
              className="form-button"
              htmlType="submit"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
