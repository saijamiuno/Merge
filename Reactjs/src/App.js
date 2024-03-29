import React, { useState } from "react";

import {
  PlusOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LinkedinOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Layout, Input, Menu } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Form1 from "./Form1";
import Persons from "./Persons";
import Inc from "./Inc";
import InputButtons from "./InputButtons";
import ObjectsOfArray from "./ObjectsOfArray";
import InputToWishList from "./InputToWishList";
import WishListToCart from "./WishListToCart";
import SelectedColor from "./SelectedColor";
import NoData from "./NoData";
import UsersTable from "./UsersTable";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Task 1", "sub1", <FormOutlined />, [
    getItem("Increment & Decrement", "g1"),
    getItem("Input Box", "g2"),
  ]),
  getItem("Task 2", "sub2", <FormOutlined />, [
    getItem(" Input Form & Buttons ", "7"),
  ]),
  getItem("Task 3", "sub4", <SettingOutlined />, [
    getItem("Users Table", "9"),
    getItem("Objects of Array", "10"),
    getItem("Input to WishList", "11"),
    getItem("WishList to Cart", "12"),
    getItem("Cart Alert", "13"),
    getItem("Selected Color", "14"),
    getItem("API Call", "15"),
  ]),
];

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

const App = () => {
  const [active, setActive] = useState("9");

  const onClick = (e) => {
    console.log("click ", e);
  };
  const handleSubMenu = (e) => {
    setActive(e.key);
  };
  const addForm = () => {
    setActive("g2");
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={App} />
          <Route path="/addUser" element={<Form1 />} />
          <Route path="/usersTable" element={<UsersTable />} />
        </Routes>
      </BrowserRouter>
      <Layout>
        <Sider style={{ color: "red" }}>
          <img
            onClick={() => {
              window.open("https://www.unosimple.com/");
            }}
            className="unoicon"
            // src={unologosq}
          />
          {/* <img className="unoban" src={unobanner} /> */}

          <Menu
            className="sider-menu"
            onClick={handleSubMenu}
            style={{
              width: "15rem",
            }}
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header>
            {" "}
            {/* <img className="head--logo" src={unologo2} /> */}
            {/* <h3
            style={{
              fontSize: "20px",
              bottom: "50px",
              position: "relative",
              bottom: "-17px",
            }}
          >
            <b />
            EMPLOYEE BIODATA FORM
          </h3> */}
          </Header>
          <Content style={{ minHeight: "90vh" }}>
            <>
              {active === "g1" ? (
                <Inc />
              ) : active === "g2" ? (
                <Form1 />
              ) : active === "9" ? (
                <UsersTable addForm={addForm} />
              ) : active === "15" ? (
                <Persons />
              ) : active === "7" ? (
                <InputButtons />
              ) : active === "10" ? (
                <ObjectsOfArray />
              ) : active === "11" ? (
                <InputToWishList />
              ) : active === "12" ? (
                <WishListToCart />
              ) : active === "14" ? (
                <SelectedColor />
              ) : (
                <NoData />
              )}
            </>
          </Content>
          <center>
            <Footer>
              <center>
                <LinkedinOutlined
                  style={{ width: "200px", height: "10px", marginLeft: "10px" }}
                  onClick={() => {
                    window.open("https://in.linkedin.com/company/unosimple");
                  }}
                />
              </center>
              © Copyright 2019 Unovate Simple Technologies Pvt.Ltd.
            </Footer>
          </center>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
