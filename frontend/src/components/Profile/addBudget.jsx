import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { Modal, Button, Form, Input, Select } from "../AntDesign";
import { axiosCall } from "../../services";
import "./style.css";

export default function AddBudget() {
  const { Option } = Select;
  const { error, loading, categories } = useContext(CategoriesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        async function addBudget() {
          await axiosCall("/budget/add-budget", "post", values);
        }
        addBudget();
        form.resetFields();
        setTimeout(() => setIsModalOpen(false), 1000);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading categories...</p>;

  if (error) return <p>Error loading categories: {error}</p>;
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Budget
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        okText="Add"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="modalForm">
          <Form.Item
            name="categoryId"
            label="Category"
            rules={[{ required: true, message: "Please select the Category!" }]}
          >
            <Select placeholder="Select Category">
              {categories.map((category) => (
                <Option value={category.id} key={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="limit"
            label="Limit"
            rules={[{ required: true, message: "Please enter the limit!" }]}
          >
            <Input placeholder="Enter Limit" />
          </Form.Item>
          <Form.Item
            name="current_spending"
            label="Current Spending Amount"
            rules={[
              {
                required: true,
                message: "Please enter the Current Spending Amount So Far!",
              },
            ]}
          >
            <Input placeholder="Enter Current Spending" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
