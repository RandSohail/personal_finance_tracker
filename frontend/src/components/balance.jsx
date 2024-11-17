import React, { useEffect, useState } from "react";
import { Title } from "./AntDesign";
import { axiosCall } from "../services";

export default function getBalance() {
  const [balance, setBalance] = useState(0.0);
  async function getBalanceAPI() {
    const accountData = await axiosCall("/account/balance", "get");
    setBalance(accountData.data.data.balance);
  }
  useEffect(() => {
    getBalanceAPI();
  }, []);

  return (
    <Title level={4} strong>
      {balance} ILS
    </Title>
  );
}
