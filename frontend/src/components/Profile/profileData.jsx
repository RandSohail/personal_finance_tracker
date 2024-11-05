import React from "react";
import PropTypes from "prop-types";
import { Title, Flex } from "../AntDesign";
import RandomAvatar from "./randomAvatar";

import "./style.css";

ProfileData.propTypes = {
  data: PropTypes.object({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default function ProfileData({ data }) {
  // TODO: make a request to the server to get this data
  const { name, email, balance } = data;
  console.log(data);

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
          <Title level={4} strong>
            {balance} ILS
          </Title>
        </div>
      </Flex>
    </div>
  );
}
