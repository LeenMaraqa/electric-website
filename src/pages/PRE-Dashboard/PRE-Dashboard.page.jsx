import SidebarMenu from "../../components/CSE/sidebar menu/sidebar-menu.component";
import "../../components/CSE/sidebar menu/sidebar-menu.css";
import { Button } from "antd";
import {
  Users,
  HouseLine,
  SignOut,
  NewspaperClipping,
  Article,
  Newspaper,
 
} from "phosphor-react";
import { useState } from "react";
import AddReport from "../../components/PRE/add-report.component"
import AddNews from "../../components/PRE/add-news.component"


const PRE_Dashboard = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="CSE-dashboard-item">
          <h1>HEPCo</h1>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <HouseLine size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span className="CSE-dashboard-btn">لوحة التحكم</span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <NewspaperClipping size={24} color="#f4f2f0" weight="fill" />
            {/* <Newspaper size={24} color="#f4f2f0" weight="fill" /> */}
          </span>
          <span>
            {/* <Button className="Empbtn" type="primary">
              خبر جديد
            </Button>{" "} */}
            <AddNews/>
          </span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
          <Article size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span>
            <span>
              {/* <Button className="Empbtn" type="primary">
                التقرير السنوي{" "}
              </Button> */}
              <AddReport/>
            </span>
          </span>
        </div>
        <div className="CSE-dashboard-item">
          <span>
            <SignOut size={24} color="#f4f2f0" weight="fill" />
          </span>
          <span className="CSE-dashboard-btn">تسجيل الخروج </span>
        </div>
      </div>
    </div>
  );
};
export default PRE_Dashboard;
