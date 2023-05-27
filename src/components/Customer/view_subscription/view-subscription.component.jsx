import { useEffect, useState } from "react";
//import Customer_Dashboard from "../../../pages/customer-Dashboard/customer-Dashboard.page";
import "./view-subscription.css"
import Header from "../../header/header.component";

const View_Subscription = () => {
  const [customerSubscriptions, setCustomerSubscriptions] = useState([]);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const fetchSubscriptions = async () => {
    const response = await fetch(
     //   "https://my.api.mockaroo.com/view-subscription.json?key=f4868e30",{
          "http://localhost:5000/api/customers/services",{

      headers: {
        'Authorization': `Bearer ${token}`,
        'userid': userId,
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
      <Header />
      <div className="customer-info">
        <table className="">
          {" "}
          <thead>
            <tr>
              <th>رقم الخدمة</th>
              <th>نوع الاشتراك </th>
              <th>العنوان </th>
              <th>حالة الاشتراك</th>
              <th>نوع العقار</th>
              <th>تاريخ الاشتراك </th>
            </tr>
          </thead>
          <tbody>
            {customerSubscriptions.map((data) => (
              <tr key={data.ServiceID}>
                <td>{data.ServiceID}</td>
                <td>{data.SubscriptionType}</td>
                <td>{data.Address}</td>
                <td>{data.SubscriptionStatus}</td>  
                <td>{data.PropertyType}</td>  
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