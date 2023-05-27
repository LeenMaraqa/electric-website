import React, { useEffect, useState } from "react";
import CustomerDetails from "./customerDetails.component";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  // useEffect(() => {
  //   // window.reload()
  //   // window.location.reload();

  // }, [customers]);
  const fetchCustomers = async () => {
  // window.reload();
    const response = await fetch("http://localhost:5000/api/customers");
    const jsonData = await response.json();
    setCustomers(jsonData);
    console.log(customers);
  };

  return (
    <div>
      <button className="CSE-dashboard-btn" onClick={fetchCustomers}>
        المشتركين
      </button>
      {customers.length > 0 ? (
        <div className="info customerInfo">
          <table className="data">
            <thead>
              <tr>
                <th>رقم المشترك</th>
                <th>اسم المشترك</th>
                <th>رقم الهاتف</th>
                <th className="th">عنوان المشترك</th>
                <th>معلومات الاشتراكات</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((item) => (
                <tr key={item.CustomerID}>
                  <td>{item.CustomerID}</td>
                  <td>{item.CustomerName}</td>
                  <td>{item.PhoneNumber}</td>
                  <td>{item.PlaceOfResidence}</td>
                  <td>
                    <CustomerDetails data={item.services} />
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Customers;
