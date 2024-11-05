import React from "react";
import { Title, Space } from "../components/AntDesign";
import { ProfileData, ProfileTable } from "../components";

export default function ProfilePage() {
  const data = {
    name: "Rand Sohail",
    email: "randsohail98@gmail.com",
    balance: 3500.5,
  };
  const firstName = data.name.split(" ")[0];
  return (
    <div className="profile-container">
      <Space direction="vertical" size="middle">
        <Title level={2} className="profile-welcome">
          Welcome, {firstName}
        </Title>
        <ProfileData data={data} />
        <ProfileTable />
      </Space>
    </div>
  );
}
