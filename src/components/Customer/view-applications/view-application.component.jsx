import Customer_Dashboard from "../../../pages/customer-Dashboard/customer-Dashboard.page";
import { useState, useEffect } from "react";
const View_Application = () => {
  const [customerApp, setCustomerApp] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchCustomerApp = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/view-application.json?key=f4868e30",{
      
        headers: {
          'Authorization': `Bearer ${token}`,
          'X-User-ID': userId,
        },
      });
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
      <Customer_Dashboard />
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
              <th>الموظف المسؤول</th>
            </tr>
          </thead>
          <tbody>
            {customerApp.map((data) => (
              <tr key={data.application_id}>
                <td>{data.application_id}</td>
                <td>{data.service_id}</td>
                <td>{data.address}</td>
                <td>{data.application_Type}</td>
                <td>{data.application_Status}</td>
                <td>{data.createdAt}</td>
                <td>{data.employee_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Application;
