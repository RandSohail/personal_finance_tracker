import React from "react";
import { Text, Flex, Divider } from "../AntDesign";

import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Flex
        align="center"
        vertical
        gap="middle"
        style={{ marginBottom: "20px" }}
      >
        <Text style={{ fontWeight: "bold", fontSize: "19px" }}>
          Finance Tracker
        </Text>
        <Text type="secondary">Helping you manage your money smarter.</Text>
      </Flex>
      {/* Copyright */}
      <Divider />
      <Text type="secondary">
        &copy; {new Date().getFullYear()} FinanceTracker. All rights reserved.
      </Text>
    </footer>
  );
}
