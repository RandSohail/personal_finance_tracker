import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { axiosCall } from "../../../services/index";
import { Input, Title, Button, Form, message } from "../../AntDesign";

//TODO: this router should be protected by checking the token -> resetPasswordToken
export default function ResetPassword() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { password } = values;
    const response = await axiosCall("/auth/reset-password", "post", {
      password,
    });

    if (response.statusText === "OK") {
      message.success("Reset Password successfully");
      setTimeout(() => navigate("/"), 1000);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Error:", errorInfo);
  };
  return (
    <div className="container">
      <Title level={2} className="header">
        Reset Password
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
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
