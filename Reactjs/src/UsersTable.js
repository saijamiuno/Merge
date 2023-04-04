import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);
  // console.log(users, "users");

  const getUsersData = async () => {
    const { data } = await axios.get("/getUserDetails");
    setUsers(data);
    console.log(data, "data");
  };

  const colums = [
    {
      title: "CREATED DATE",
      dataIndex: "createdAt",
      render: (createdAt, record) => {
        return <div>{moment(createdAt).format("MM/DD/YYYY")}</div>;
      },
    },
    {
      title: "firstName",
      dataIndex: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "dob",
      dataIndex: "dob",
    },
    {
      title: "designation",
      dataIndex: "designation",
    },
    {
      title: "comments",
      dataIndex: "comments",
    },
  ];

  return <Table dataSource={users} columns={colums} />;
}
