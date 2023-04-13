import { useState } from "react";
const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/subscription.json?key=6b7de8e0&__method=POST"
    );
    const jsonData = await response.json();
    setCustomers(jsonData);
  };

  return (
    <div>
      <button onClick={fetchCustomers}>المشتركين</button>
      {customers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>customer_Name</th>
              <th>phone_Number</th>
              <th>Address</th>
              <th>subscription_Type</th>
              <th>subscription_Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customer_Name}</td>
                <td>{item.phone_Number}</td>
                <td>{item.address}</td>
                <td>{item.subscription_Type}</td>
                <td>{item.subscription_Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
export default Customers;
