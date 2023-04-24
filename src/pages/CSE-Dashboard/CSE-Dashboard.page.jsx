import React, { useState, useEffect } from "react";
import Customers from "../../components/CSE/customers/customers.component";
import Applications from "../../components/CSE/applications/applications.component";
import SidebarMenu from "../../components/CSE/sidebar menu/sidebar-menu.component";
import SearchOutlined from "@ant-design/icons";
import { MagnifyingGlass } from "phosphor-react";
import "./CSE-Dashboard.css"
import user from "../../images/user1.png"
const CSE_Dashboard = () => {
  //https://my.api.mockaroo.com/app.json?key=6b7de8e0&__method=POST

  const [customerName, setCustomerName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      "http://localhost:5000/api/request/searchByName",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerName: customerName }),
      }
    );
    const data = await response.json();
    console.log(data);
    setSearchResults(data);
  };
  return (
    <div className="CSE-container">
      {/* <h1>CSE Dashboard</h1> */}
      <SidebarMenu />
      {/* <Customers /> */}
      {/* <Applications /> */}
      <div className="CSE-header">
        <div className="header-wrapper">
          <div className="header-search">
            <button onClick={handleSearch} className="search-btn">
              {" "}
              search
            </button>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="search"
              type="search"
              placeholder="ابحث عن طلب"
              name="search"
            />
            {/* <MagnifyingGlass size={19} color="#8d8a86" weight="bold" /> */}
          </div>
          <div className="header-user">
            <span className="header-user-name">لين مرقه</span> &nbsp; &nbsp;
            <img src= {user} />
            {/* alt="User Image" */}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="overview-wrapper">
          <div className="quick-overview"></div>
          <div className="quick-overview"></div>
          <div className="quick-overview"></div>
          <div className="quick-overview"></div>
        </div>

        {searchResults.length > 0 ? (
          <div className="info">
            <table>
              <thead>
                <tr>
                  <th>رقم الطلب</th>
                  <th>اسم المشترك </th>
                  <th> رقم الخدمة</th>
                  <th>نوع الطلب</th>
                  <th> رقم الهاتف </th>
                  <th>&nbsp; &nbsp; &nbsp; &nbsp; العنوان</th>
                  {/* <th>  السبب</th> */}
                  <th>حالة الطلب</th>
                  <th>تاريخ تقديم الطلب</th>
                  <th>تفاصيل اخرى</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.RequestID}>
                    <td>{result.RequestID}</td>
                    <td>{result.service.customer.CustomerName}</td>
                    <td>{result.service.ServiceID}</td>
                    <td>{result.request_type.TypeName}</td>
                    <td>{result.service.customer.PhoneNumber}</td>
                    <td>{result.service.Address}</td>
                    {/* <td>{result.reason}</td> */}
                    <td>{result.request_status.StatusName}</td>
                    <td>{result.createdAt}</td>
                    <td><button>تفاصيل اخرى</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CSE_Dashboard;
