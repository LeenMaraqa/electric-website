// https://my.api.mockaroo.com/app.json?key=6b7de8e0&__method=POST
// https://my.api.mockaroo.com/updateStatus/123.json?key=6b7de8e0&__method=PUT

import { useState } from "react";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/app.json?key=6b7de8e0&__method=POST"
    );
    const jsonData = await response.json();
    setApplications(jsonData);
  };

  const handleStatusUpdate = async (id, newStatus) => {
    console.log("id : ", id);
    console.log("new status : ", newStatus);

    try {
      const response = await fetch(
        `https://my.api.mockaroo.com/updateStatus/123.json?key=6b7de8e0&__method=PUT`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            status: newStatus,
          }),
        }
      );
      console.log("response", response);
      const updatedApplication = await response.json();
      console.log("updatedApplication", updatedApplication);
      const updatedApplications = applications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      );
      // console.log("updatedApplicationss",updatedApplications);

      setApplications(updatedApplications);

      console.log("updated applications", updatedApplications);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchApplications}>الطلبات</button>
      {applications.length > 0 ? (
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
            {applications.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.customer_Name}</td>
                <td>{item.service_id}</td>
                <td>{item.type}</td>
                <td>{item.phone_Number}</td>
                <td>{item.address}</td>
                <td>{item.reason}</td>
                <td>
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusUpdate(item.id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Applications;
