import { Button, Form, Input, Spin, message } from "antd";
import { useState } from "react";

const CreateCategoryPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Successfully created a new category.");
        form.resetFields();
      } else {
        message.error("Failed to create a new category.");
      }
    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input category name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Image (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please input category image link!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Createa
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateCategoryPage;
