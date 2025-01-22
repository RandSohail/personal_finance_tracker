import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form, Card, Flex, Text } from "../../AntDesign";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { password } = values;
      const email = values.email.toLowerCase();
      const response = await axiosCall("/auth/login", "post", {
        email,
        password,
      });

      if (response && response.statusText === "OK") {
        navigate("/profile");
      } else {
        throw new Error(response?.data?.message || "Login failed");
      }
    } catch (error) {
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="inputs-container">
        <Card bordered>
          <Title level={2} className="header">
            Login
          </Title>
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
                loading={loading}
                style={{ marginBottom: "20px" }}
              >
                Login
              </Button>
              <Flex justify="space-between">
                <Link to="/forget-password">
                  <Text type="secondary">Forget Password?</Text>
                </Link>
                <Link
                  to="/signup"
                  style={{ color: "#000e3d", fontWeight: "bold" }}
                >
                  Sign Up
                </Link>
              </Flex>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
