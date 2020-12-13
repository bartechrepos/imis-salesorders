import { Button, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import AddCustomerModal from "../components/customers/AddCustomerModal";
const columns = [
  {
    title: "الاسم",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: "السن",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "العنوان",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "الوسوم",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
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
  {
    title: "",
    key: "action",
    render: (_text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default function CustomersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const customerSaved = () => {
    //fetchCustomers();
    setModalOpen(false);
  };
  return (
    <div>
      {/**
      <SelectCustomer /> */}
      <AddCustomerModal
        visible={modalOpen}
        onSave={customerSaved}
        closeMe={() => setModalOpen(false)}
      />
      <Table columns={columns} dataSource={data} />

      <div className="centered">
        <Button type="primary" onClick={() => setModalOpen(true)}>
          اضافة عميل جديد
        </Button>
      </div>
    </div>
  );
}
