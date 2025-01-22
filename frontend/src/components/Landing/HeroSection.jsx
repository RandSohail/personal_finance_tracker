import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Flex, Title, Text, Button, Space } from "../AntDesign";
import Landing from "../../assets/landing.svg";
import "./style.css";

export default function Hero() {
  return (
    <Flex className="hero-container">
      <Space direction="vertical" size={"large"} className="hero-text">
        <Title>Master Your Money with Ease</Title>
        <Text type="secondary" className="secondary-text">
          Track your spending, set budgets, and achieve financial freedom all in
          one app.
        </Text>
        <Button type="primary">
          <NavLink to="/signup">Sign up For Free</NavLink>
        </Button>
      </Space>
      <Space className="hero-image">
        <Image src={Landing} preview={false} />
      </Space>
    </Flex>
  );
}
