import { useEffect, useState } from "react";
import Customer_Dashboard from "../../../pages/customer-Dashboard/customer-Dashboard.page";
import "./view-subscription.css"
const View_Subscription = () => {
  const [customerSubscriptions, setCustomerSubscriptions] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchSubscriptions = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/view-subscription.json?key=f4868e30",{
      
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-User-ID': userId,
      },
    });
    console.log(response);

    const jsonData = await response.json();
    setCustomerSubscriptions(jsonData);
    console.log(typeof(customerSubscriptions));
    console.log(typeof(jsonData));
  };
  useEffect(() => {
    fetchSubscriptions();
  }, []);
 

  return (
    <div className="customer-info-wrapper">
      <Customer_Dashboard />
      <div className="customer-info">
        <table className="">
          {" "}
          <thead>
            <tr>
              <th>رقم الخدمة</th>
              <th>نوع الاشتراك </th>
              <th>العنوان </th>
              <th>حالة الاشتراك</th>
              <th>تاريخ الاشتراك </th>
            </tr>
          </thead>
          <tbody>
            {customerSubscriptions.map((data) => (
              <tr key={data.service_id}>
                <td>{data.service_id}</td>
                <td>{data.subscription_Type}</td>
                <td>{data.address}</td>
                <td>{data.subscription_Status}</td>
                <td>{data.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View_Subscription;
