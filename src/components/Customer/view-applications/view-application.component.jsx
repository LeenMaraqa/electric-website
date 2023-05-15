//import Customer_Dashboard from "../../../pages/customer-Dashboard/customer-Dashboard.page";
import { useState, useEffect } from "react";
import Header from "../../header/header.component";
const View_Application = () => {
  const [customerApp, setCustomerApp] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchCustomerApp = async () => {
    const response = await fetch(
      "http://localhost:5000/api/customers/applications",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          userid: userId,
        },
      }
    );
    console.log(response);
    const jsonData = await response.json();
    setCustomerApp(jsonData);
    console.log(customerApp);
  };

  useEffect(() => {
    fetchCustomerApp();
  }, []);
  return (
    <div className="customer-info-wrapper">
      <Header />
      <div className="customer-info test">
        <table className="">
          {" "}
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>رقم الخدمة</th>
              <th>العنوان </th>
              <th>نوع الطلب</th>
              <th>حالة الطلب</th>
              <th>تاريخ تقديم الطلب </th>
              {/* <th>الموظف المسؤول</th> */}
            </tr>
          </thead>
          <tbody>
            {customerApp.map((data) => (
              <tr key={data.RequestID}>
                <td>{data.RequestID}</td>
                <td>{data.service.ServiceID}</td>
                <td>{data.service.Address}</td>
                <td>{data.request_type.TypeName}</td>
                <td>{data.request_status.StatusName}</td>
                <td>{data.createdAt}</td>
                {/* <td>{data.employee_Name}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Application;
