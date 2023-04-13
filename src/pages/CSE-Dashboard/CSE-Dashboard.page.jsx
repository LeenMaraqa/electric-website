import React, { useState, useEffect } from "react";
import Customers from "../../components/CSE/customers/customers.component";
import Applications from "../../components/CSE/applications/applications.component";
const CSE_Dashboard = () => {
  //https://my.api.mockaroo.com/app.json?key=6b7de8e0&__method=POST

  const [customerName, setCustomerName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/app.json?key=6b7de8e0&__method=POST",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer_Name: customerName }),
      }
    );
    const data = await response.json();
    console.log(data);
    setSearchResults(data);
  };
  return (
    <div>
      <h1>CSE Dashboard</h1>
      <Customers />
      <Applications />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Service ID</th>
              <th>Type</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.customer_Name}</td>
                <td>{result.service_id}</td>
                <td>{result.type}</td>
                <td>{result.phone_Number}</td>
                <td>{result.address}</td>
                <td>{result.reason}</td>
                <td>{result.status}</td>
                <td>{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
export default CSE_Dashboard;
