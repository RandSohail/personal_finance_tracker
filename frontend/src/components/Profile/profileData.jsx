import React, { useEffect, useState } from "react";
import { Title, Flex } from "../AntDesign";
import RandomAvatar from "./randomAvatar";
import { axiosCall } from "../../services";
import "./style.css";

export default function ProfileData(data) {
  const [balance, setBalance] = useState(0.0);
  useEffect(() => {
    async function getBalanceAPI() {
      const accountData = await axiosCall("/account/balance", "get");
      setBalance(accountData.data.data.balance);
    }
    getBalanceAPI();
  }, []);
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
          <Title level={4} strong>
            {balance} ILS
          </Title>
        </div>
      </Flex>
    </div>
  );
}
