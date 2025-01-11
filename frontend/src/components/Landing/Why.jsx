import React from "react";
import { Title, Card, Text } from "../AntDesign";
import "./style.css";
import Tracking from "../../assets/tracking.png";
import PieChart from "../../assets/pie-chart.png";
import Account from "../../assets/account.png";
import Insight from "../../assets/insight.png";

const data = [
  {
    title: "Expense Tracking",
    description: "Track all your transactions in one place.",
    icon: Tracking,
  },
  {
    title: "Budget Management",
    description: "Set spending limits for each category.",
    icon: PieChart,
  },
  {
    title: "Insights & Reports",
    description: "Understand your spending patterns with detailed charts.",
    icon: Insight,
  },
  {
    title: "Secure Accounts",
    description: "Your data is encrypted and safe.",
    icon: Account,
  },
];

export default function WhySection() {
  return (
    <section className="why-section-container">
      <Title
        level={2}
        style={{ color: "#000e3d", textAlign: "center", padding: "20px 0px" }}
      >
        Why Choose Finance Tracker?
      </Title>
      <Card
        style={{
          padding: "0px !important",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <Card.Grid
            key={item.title}
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img alt="example" src={item.icon} style={{ width: "35px" }} />
            <Text style={{ fontWeight: "bold", padding: "10px 0px" }}>
              {item.title}
            </Text>

            {item.description}
          </Card.Grid>
        ))}
      </Card>
    </section>
  );
}
