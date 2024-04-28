import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";

export const AdminUserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const columns = [
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="Avatar"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString();
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Delete this user?"
          description="Are you sure to delete this user?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteUser(record.email)}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Users fetch failed!");
      }
    } catch (error) {
      console.log("API Error", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("User deleted successfully!");
        fetchUsers();
      } else {
        message.error("User delete failed!");
      }
    } catch (error) {
      console.log("API Error", error);
    }
  }

  console.log(dataSource);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default AdminUserPage;
