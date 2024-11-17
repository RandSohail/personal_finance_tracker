import React from "react";
import { Title, Flex } from "../AntDesign";
import RandomAvatar from "./randomAvatar";
import Balance from "../balance";
import "./style.css";

export default function ProfileData(data) {
  const { name, email } = data.data;

  return (
    <div>
      <Flex justify="space-between">
        <Flex>
          <RandomAvatar />
          {/* Name & Email */}
          <div className="first-section-name-email">
            <Title level={4} strong>
              {name}
            </Title>
            <Title level={4} strong>
              {email}
            </Title>
          </div>
        </Flex>
        <div className="profile-second-section">
          <Title level={5} strong>
            Your total Balance is{" "}
          </Title>
          <Balance />
        </div>
      </Flex>
    </div>
  );
}
