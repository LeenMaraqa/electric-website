import "./sidebar-menu.css";
import Customers from "../customers/customers.component";
import Applications from "../applications/applications.component";
import { handleLogout } from "../../logout/logout.component";

import {
  SquaresFour,
  Users,
  FileText,
  CalendarCheck,
  HouseLine,
  HandCoins,
  Money,
  Coins,
  SignOut,
} from "phosphor-react";
import logo from "../../../images/logo.jpg";

import { useState } from "react";
const userRole = localStorage.getItem("role");

const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <div className="CSE-dashboard-item">
        <h1>HEPCo</h1>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          {/* <SquaresFour size={24} color="#f4f2f0" weight="fill" /> */}
          <HouseLine size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn">لوحة التحكم</span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <Users size={24} color="#f4f2f0" weight="fill" />
        </span>

        <span >
          <Customers />
        </span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <FileText size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span >
          {" "}
          <Applications />
        </span>
      </div>
      {/* <div className="CSE-dashboard-item">
        <span>
          <CalendarCheck size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn"> التقويم</span>
      </div>
      <div className="CSE-dashboard-item">
        <span>
          <Coins size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn">المعاملات المالية</span>
      </div> */}
      <div className="CSE-dashboard-item">
        <span>
          {/* <HandCoins size={24} color="#f4f2f0" weight="fill" /> */}
          <SignOut size={24} color="#f4f2f0" weight="fill" />
        </span>
        <span className="CSE-dashboard-btn" onClick={handleLogout}>تسجيل الخروج </span>
      </div>
    </div>
  );
};
export default SidebarMenu;
