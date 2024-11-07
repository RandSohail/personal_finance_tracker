import React, { useEffect, useState } from "react";
import { Title, Space } from "../components/AntDesign";
import { ProfileData, ProfileTable } from "../components";
import { axiosCall } from "../services";

export default function ProfilePage() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fetchProfileData() {
      const axiosData = await axiosCall("/user/user_data", "get");
      setData({
        name: axiosData.data.data.name,
        email: axiosData.data.data.email,
      });
    }
    fetchProfileData();
  }, []);

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
