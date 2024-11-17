import React, { useState, useEffect } from "react";
import { Tag } from "antd";
import { Table, Title } from "../AntDesign";
import { axiosCall } from "../../services";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
    render: (_, transactions) => (
      <>
        {transactions.type === "income" ? (
          <Tag color="green" key={transactions.id}>
            Income
          </Tag>
        ) : (
          <Tag color="blue" key={transactions.id}>
            Expense
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_, transactions) => (
      <>
        {transactions.description === "" || null ? (
          <p> No description </p>
        ) : (
          <p>{transactions.description}</p>
        )}
      </>
    ),
  },
];

export default function TransactionTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAllTransaction() {
      const fetchedData = await axiosCall(
        "/transaction/all-transactions",
        "get",
      );
      const dataWithKeys = fetchedData.data.data.map((item) => ({
        ...item,
        key: item.id,
      }));
      setData(dataWithKeys);
    }
    fetchAllTransaction();
  }, []);

  return (
    <>
      <Title level={4}>Latest Transactions</Title>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
