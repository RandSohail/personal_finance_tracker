import React, { useState, useEffect } from "react";
import { Tag } from "antd";
import { Table, Title } from "../AntDesign";
import { axiosCall } from "../../services";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Limit",
    dataIndex: "limit",
    key: "limit",
  },
  {
    title: "Current Spending",
    dataIndex: "current_spending",
    key: "current_spending",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;
          if (tag === "in Budget") {
            color = "green";
          } else if (tag === "out Budget") {
            color = "red";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export default function ProfileTable() {
  const [data, setData] = useState([]);
  // TODO: automatically update table after add a category
  useEffect(() => {
    async function fetchCategoryBudgetsForCurrentWeek() {
      const fetchedData = await axiosCall(
        "/budget/getCategoryBudgetsForCurrentWeek",
        "get",
      );
      const dataWithKeys = fetchedData.data.data.map((item, index) => ({
        ...item,
        key: index + 1,
      }));
      setData(dataWithKeys);
    }
    fetchCategoryBudgetsForCurrentWeek();
  }, []);

  return (
    <>
      <Title level={4}>Budget for this Week</Title>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
