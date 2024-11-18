/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { Modal, Button, Form, Select, Input } from "../AntDesign";
import { axiosCall } from "../../services";

export default function AddTransaction() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("");

  const { categories, loading, error } = useContext(CategoriesContext);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log({ values });
        async function addTransaction() {
          await axiosCall("/transaction/add-transaction", "post", values);
        }
        addTransaction();
        setTimeout(() => setIsModalOpen(false), 1000);
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading categories...</p>;

  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Transaction
      </Button>
      <Modal
        open={isModalOpen}
        okText="Add Transaction"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Select
              onSelect={(value) => {
                setType(value);
              }}
            >
              <Option value="income">Income</Option>
              <Option value="expense">Expense</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="categoryId">
            <Select disabled={type === "income"}>
              {categories.map((category) => (
                <Option value={category.id} key={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
            <Input placeholder="Add the amount" type="number" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Add a description" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
