import { useState } from "react";
import "../sidebar menu/sidebar-menu.css";
import "../../../pages/CSE-Dashboard/CSE-Dashboard.css";
import MoreDetails from "../more details/moreDetails.component";
import user1 from "../../../images/user1.png";
const Applications = () => {
  const [applications, setApplications] = useState([]);
  // https://my.api.mockaroo.com/appsInfo.json?key=f4868e30&__method=POST
  const [status, setStatus] = useState("");
  const fetchApplications = async () => {
    const response = await fetch("http://localhost:5000/api/request");
    const jsonData = await response.json();
    setApplications(jsonData);
    console.log("response", response);
    console.log("jsonData", jsonData);
  };

  const handleStatusUpdate = async (id, newStatus) => {
    console.log("id : ", id);
    console.log("new status : ", newStatus);

    try {
      const response = await fetch(`http://localhost:5000/api/request`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: newStatus,
        }),
      });
      console.log("response", response);
      //number of rows affected by the update operation
      const updatedApplication = await response.json();
      console.log("updatedApplication", updatedApplication);

      // Update the status of the selected application in the state
      setApplications(
        applications.map((app) =>
          app.RequestID === id
            ? { ...app, request_status: { StatusName: newStatus } }
            : app
        )
      );

      console.log("updated applications", applications);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="CSE-dashboard-btn" onClick={fetchApplications}>
        الطلبات
      </button>
      {applications.length > 0 ? (
        <div className="info appInfo">
          {" "}
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
              {applications.map((item) => (
                <tr key={item.RequestID}>
                  <td>{item.RequestID}</td>
                  <td>{item.service.customer.CustomerName}</td>
                  <td>{item.service.ServiceID}</td>
                  <td>{item.request_type.TypeName}</td>
                  <td>{item.service.customer.PhoneNumber}</td>
                  <td>{item.service.Address}</td>
                  {/* <td>{item.reason}</td> */}
                  <td>
                    <select
                      value={item.request_status.StatusName}
                      onChange={(e) =>
                        handleStatusUpdate(item.RequestID, e.target.value)
                      }
                    >
                      <option value="طلب جديد">طلب جديد</option>
                      <option value="قيد المراجعة">قيد المراجعة</option>
                      <option value="مقبول">مقبول</option>
                      <option value="مرفوض">مرفوض</option>
                    </select>
                  </td>
                  <td>{item.createdAt}</td>

                  <td>
                    {" "}
                    <MoreDetails
                      // requestId={item.RequestID}
                      customerName={item.service.customer.CustomerName}
                      serviceId={item.service.ServiceID}
                      requestTypeName={item.request_type.TypeName}
                      phoneNumber={item.service.customer.PhoneNumber}
                      address={item.service.Address}
                      reason={item.Reason}
                      beneficiaryIDImage={user1}
                      userIDImage={user1}
                      beneficiaryName={"nana"}
                      footPrint={user1}
                      locationImage={user1}
                      electricianName={"test"}
                      electricianPhoneNumber={"151848"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Applications;
