import { useState } from "react";
import "../sidebar menu/sidebar-menu.css";
import "../../../pages/CSE-Dashboard/CSE-Dashboard.css";
import MoreDetails from "../more details/moreDetails.component";
import user1 from "../../../images/user1.png";
const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState("");
  const empNum = localStorage.getItem("userId");
  // console.log("empnum : ",empNum);
  const fetchApplications = async () => {
    const response = await fetch("http://localhost:5000/api/request");
    const allApplications = await response.json();
    setApplications(allApplications);
    console.log("response", response);
    console.log("allApplications", allApplications);
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
          empNum: empNum,
        }),
      });
      console.log("response", response);
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
    <div className="">
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
                <th>اسم مقدم الطلب </th>
                {/* <th> رقم الخدمة</th> */}
                <th className="thType">نوع الطلب</th>
                <th> رقم هاتف مقدم الطلب </th>
                <th> العنوان</th>
                {/* <th>  السبب</th> */}
                <th>حالة الطلب</th>
                <th>تاريخ تقديم الطلب</th>
                {/* <th>test</th> */}
                <th>تفاصيل اخرى</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item) => (
                <tr key={item.RequestID}>
                  <td>{item.RequestID}</td>
                  <td>{item.ApplicantName}</td>
                  <td>{item.request_type.TypeName}</td>
                  <td>{item.ApplicantPhoneNumber}</td>
                  <td>{item.ApplicantAddress}</td>
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
                      beneficiaryIDImage={
                        item.request_type.TypeName === "تعديل بيانات المستفيد"
                          ? `data:image/jpg;base64,${item["tenant-datum"].TenantImage}`
                          : "no image"
                      }
                      userIDImage={
                        item.request_type.TypeName === "تعديل بيانات المستفيد"
                          ? `data:image/jpg;base64,${item["tenant-datum"].CustomerImage}`
                          : "no image"
                      }
                      beneficiaryName={
                        item.request_type.TypeName === "تعديل بيانات المستفيد"
                          ? `${item["tenant-datum"].TenantName}`
                          : "no data"
                      }
                      footPrint={
                        item.request_type.TypeName === "نقل الاعمدة المعارضة"
                          ? `data:image/jpg;base64,${item.TransferringPole.Footprint}`
                          : "no image"
                      }
                      locationImage={
                        item.request_type.TypeName === "نقل الاعمدة المعارضة"
                          ? `data:image/jpg;base64,${item.TransferringPole.LocationOfPole}`
                          : "no image"
                      }
                      electricianName={
                        item.request_type.TypeName === "تحويل من مؤقت الى دائم"
                          ? `${item["property-type"].ElectricianName}`
                          : "no data"
                      }
                      electricianPhoneNumber={
                        item.request_type.TypeName === "تحويل من مؤقت الى دائم"
                          ? `${item["property-type"].ElectricianNo}`
                          : "no data"
                      }
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
