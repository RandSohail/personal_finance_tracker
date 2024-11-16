import React from "react";
import { Space, Card, Title } from "../components/AntDesign";
import { AddTransaction } from "../components/Transaction";
export default function TransactionsPage() {
  return (
    <div className="profile-container">
      <Space direction="vertical" size="middle">
        <Card style={{ marginTop: "30px", textAlign: "center" }}>
          <Title level={4}>Your Total Balance is 00.00 ILS</Title>
        </Card>
        <AddTransaction />
        <p>table</p>
      </Space>
    </div>
  );
}
