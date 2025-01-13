import React from "react";
import { Space, Card, Title } from "../components/AntDesign";
import { AddTransaction, Balance, TransactionTable } from "../components";
// import Balance from "../components/balance";
export default function TransactionsPage() {
  return (
    <div className="profile-container">
      <Space direction="vertical" size="middle">
        <Card style={{ marginTop: "30px", textAlign: "center" }}>
          <Title level={4}>Your Total Balance is</Title>
          <Balance />
        </Card>
        <AddTransaction />
        <TransactionTable />
      </Space>
    </div>
  );
}
