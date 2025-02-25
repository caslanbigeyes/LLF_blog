import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Icon } from "antd";
import Router from "next/router";
import axios from "axios";
import servicePath from "../config/apiUrl";
import "../static/style/components/header.css";


const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(servicePath.getTypeInfo);
      setNavArray(res.data.data);
    };
    fetchData();
  }, []);
  //跳转到列表页
  const handleClick = (e) => {
    // console.log(e.domEvent.clientY)
    // e.domEvent.clientY = 0
    // window.scrollY = 0
    // console.log( window.scrollY)
    if (e.key == 0) {
      Router.push("/index");
      setTimeout(function () {
        location.reload();
      }, 1000);
    } else if (e.key == 5) {
      Router.push("/login");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={16} sm={16} md={10} lg={10} xl={10}>
          <span className="sign">
            <span className="fast-flicker">L</span>L
            <span className="flicker">F</span>
          </span>
          <span className="header-txt">随记</span>
        </Col>
        <Col className="memu-div" xs={8} sm={8} md={14} lg={10} xl={8}>
          <Menu
            mode="horizontal"
            onClick={handleClick}
            overflowedIndicator={
              <span>
                <Icon type="menu-unfold" />
              </span>
            }
          >
            <Menu.Item key="0">
              <Icon type="home" />
              首页
            </Menu.Item>
            {navArray.map((item) => (
              <Menu.Item key={item.Id}>
                <Icon type={item.icon} />
                {item.typeName}
              </Menu.Item>
            ))}
            {/* <Menu.Item key="5">
              <SmileOutlined/>
            <UserOutlined />
              登录
            </Menu.Item> */}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
