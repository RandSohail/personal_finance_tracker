import React from "react";
import { Tag } from "antd";
import { Table, Title } from "../AntDesign";

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
const data = [
  {
    key: "1",
    category: "Food ",
    limit: 100.5,
    current_spending: 20.25,
    tags: ["in Budget"],
  },
  {
    key: "2",
    category: "Entertainment",
    limit: 50,
    current_spending: 10.5,
    tags: ["in Budget"],
  },
  {
    key: "3",
    category: "Transportation",
    limit: 200.0,
    current_spending: 250,
    tags: ["out Budget"],
  },
  {
    key: "4",
    category: "Utilities",
    limit: 20.0,
    current_spending: 0.0,
    tags: ["in Budget"],
  },
  {
    key: "5",
    category: "Health",
    limit: 50.0,
    current_spending: 0.0,
    tags: ["in Budget"],
  },
  {
    key: "6",
    category: "Clothing",
    limit: 300.0,
    current_spending: 150.25,
    tags: ["in Budget"],
  },
  {
    key: "7",
    category: "Rent",
    limit: 1700.0,
    current_spending: 1700.0,
    tags: ["in Budget"],
  },
  {
    key: "8",
    category: "Others",
    limit: 200.0,
    current_spending: 0.0,
    tags: ["in Budget"],
  },
];

export default function ProfileTable() {
  return (
    <>
      <Title level={4}>Budget for this month</Title>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
