import React from "react";
import { Title, Card, Text } from "../AntDesign";
import "./style.css";

const data = [
  {
    title: "Expense Tracking",
    description: "Track all your transactions in one place.",
    icon: "/assets/tracking.png",
  },
  {
    title: "Budget Management",
    description: "Set spending limits for each category.",
    icon: "/assets/pie-chart.png",
  },
  {
    title: "Insights & Reports",
    description: "Understand your spending patterns with detailed charts.",
    icon: "/assets/insight.png",
  },
  {
    title: "Secure Accounts",
    description: "Your data is encrypted and safe.",
    icon: "/assets/account.png",
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
