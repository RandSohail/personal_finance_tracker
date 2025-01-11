import React from "react";
import CountUp from "react-countup";
import { Title, Statistic, Card, Text } from "../AntDesign";

export default function UserStatisticsSection() {
  const formatter = (value) => (
    <CountUp end={value} delay={1} duration={6} separator="," />
  );
  return (
    <div className="statistics-container">
      <Title
        level={2}
        style={{
          width: "60%",
          textAlign: "center",
          color: "#000e3d",
          padding: "20px 0px",
        }}
      >
        Join Thousands of Happy Users Managing Their Finances Effortlessly
      </Title>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Card style={{ width: "400px", textAlign: "center" }}>
          <Statistic
            title="Total Users"
            value={20000}
            formatter={formatter}
            prefix="+"
          />
          <Text strong>Users and counting!</Text>
        </Card>
        <Card style={{ width: "400px", textAlign: "center" }}>
          <Statistic
            title="Transactions Tracked"
            value={1000000}
            formatter={formatter}
            prefix="Over"
          />
          <Text strong>transactions tracked.</Text>
        </Card>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card style={{ width: "400px", textAlign: "center" }}>
          <Statistic
            title="Budgets Created"
            value={500000}
            formatter={formatter}
          />
          <Text strong>budgets successfully managed.</Text>
        </Card>
        <Card style={{ width: "400px", textAlign: "center" }}>
          <Statistic
            title="Savings Achieved"
            value={10000000}
            formatter={formatter}
            prefix="$"
          />
          <Text strong>saved collectively by users.</Text>
        </Card>
      </div>
    </div>
  );
}
