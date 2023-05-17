import { useState } from "react";
import "../sidebar menu/sidebar-menu.css";
import "../../../pages/CSE-Dashboard/CSE-Dashboard.css";
const Customers = () => {
  const [customers, setCustomers] = useState([]);

   const fetchCustomers = async () => {
    const response = await fetch(
      "http://localhost:5000/api/customers"
    );
    const jsonData = await response.json();
    setCustomers(jsonData);
  };

  return (
    <div>
      <button className="CSE-dashboard-btn" onClick={fetchCustomers}>
        المشتركين
      </button>
      {customers.length > 0 ? (
        <div className="info customerInfo">
          <table className="data">
            {" "}
            <thead>
              <tr>
                <th>رقم المشترك</th>
                <th>اسم المشترك</th>
                <th>رقم الهاتف</th>
                <th className="th">العنوان</th>
                <th>نوع الاشتراك</th>
                <th>حالة الاشتراك</th>
              </tr>
            </thead>
          <tbody>
            {customers.map((item) => (
              <tr key={item.CustomerID}>
                <td>{item.CustomerID}</td>
                <td>{item.CustomerName}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.PlaceOfResidence}</td>
                <td>{item.subscription_Type}</td>
                <td>{item.subscription_Status}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default  Customers 

