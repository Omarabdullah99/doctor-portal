import React from "react";
import "../styles/LayoutStyles.css";
import { userMenu,adminMenu } from "../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {Badge, message } from "antd";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  console.log("authuser",user)

  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };


  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>DOC APP</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu?.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content">
              <Badge count={user && user?.notifcation?.length}>
              <i className="fa-solid fa-bell"></i>
            </Badge>
                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;