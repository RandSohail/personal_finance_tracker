import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form, Card, Text } from "../../AntDesign";
import "../style.css";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { name, password } = values;
      const email = values.email.toLowerCase();
      const response = await axiosCall("/auth/signup", "post", {
        name,
        email,
        password,
      });

      if (response.data.message === "SUCCESS SIGNUP") {
        navigate("/profile");
      } else {
        throw new Error(response.data.message || "Signup failed");
      }
    } catch (error) {
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Error:", errorInfo);
    form.resetFields();
  };

  return (
    <div className="container">
      <Card>
        <Title level={3} className="header">
          Sign Up a new account
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
            {/* Username */}
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
                loading={loading}
              >
                Signup
              </Button>
            </Form.Item>
            <Text type="secondary">Already have an account</Text>
            <Link to="/login">
              <Text strong color="#000e3d">
                {" "}
                LogIn
              </Text>
            </Link>
          </Form>
        </div>
      </Card>
    </div>
  );
}
