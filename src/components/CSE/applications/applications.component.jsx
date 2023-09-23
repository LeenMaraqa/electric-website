import { useState } from "react";
import { Table, Tag, Select, Pagination } from "antd";
import "../sidebar menu/sidebar-menu.css";
import "../../../pages/CSE-Dashboard/CSE-Dashboard.css";
import MoreDetails from "../more details/moreDetails.component";
import user1 from "../../../images/user1.png";
import "./applications.css";
const { Option } = Select;
const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const empNum = localStorage.getItem("userId");

  const fetchApplications = async () => {
    const response = await fetch("http://localhost:5000/api/request");
    const data = await response.json();
    console.log("data", data);
    // const allApplications = data.reverse();
    const allApplications = data.reverse().map((application) => {
      return {
        ...application,
        request_type: { TypeName: application.request_type.TypeName },
      };
    });
    setApplications(allApplications);
    console.log("response", response);
    console.log("allApplications", allApplications);
  };

  const handleStatusUpdate = async (id, newStatus, serviceId, requestType) => {
    console.log("id:", id);
    console.log("new status:", newStatus);
    console.log("serviceId:", serviceId);
    console.log("requestType:", requestType);

    try {
      const response = await fetch(`http://localhost:5000/api/request`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: newStatus,
          serviceId: serviceId,
          requestType: requestType,
          empNum: empNum,
        }),
      });

      const newApplications  = applications.map((app) =>
        app.RequestID === id
          ? { ...app, request_status: { StatusName: newStatus } }
          : app
      );
      setApplications(newApplications );
      console.log("newApplications ", applications);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const columns = [
    {
      title: "رقم الطلب",
      dataIndex: "RequestID",
      key: "RequestID",
    },
    {
      title: "اسم مقدم الطلب",
      dataIndex: "ApplicantName",
      key: "ApplicantName",
    },

    {
      title: "نوع الطلب",
      className: "th-app",
      dataIndex: "request_type",
      key: "request_type",
      render: (requestType) => requestType && requestType.TypeName,
    },
    {
      title: "رقم الهاتف  ",
      dataIndex: "ApplicantPhoneNumber",
      key: "ApplicantPhoneNumber",
    },
    {
      title: "العنوان",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "حالة الطلب",
      dataIndex: "request_status",
      key: "request_status",

      render: (status, record) => (
        <Select
          className="app-status"
          value={status.StatusName}
          onChange={(newStatus) =>
            handleStatusUpdate(
              record.RequestID,
              newStatus,
              record.service.ServiceID,
              record.request_type.TypeName
            )
          }
        >
          <Option value="طلب جديد">طلب جديد</Option>
          <Option value="قيد المراجعة">قيد المراجعة</Option>
          <Option value="مقبول">مقبول</Option>
          <Option value="مرفوض">مرفوض</Option>{" "}
          <Option value="منتهي">منتهي</Option>{" "}
        </Select>
      ),
    },
    {
      title: "تاريخ تقديم الطلب",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "تفاصيل اخرى",
      dataIndex: "RequestID",
      key: "RequestID",
      render: (id, record) => (
        <MoreDetails
          requestId={id}
          customerName={record.service.customer.CustomerName}
          serviceId={record.service.ServiceID}
          requestTypeName={record.request_type.TypeName}
          phoneNumber={record.service.customer.PhoneNumber}
          address={record.service.Address}
          reason={record.Reason}
          beneficiaryIDImage={
            record.request_type.TypeName === "تعديل بيانات المستفيد"
              ? `data:image/jpg;base64,${record["tenant-datum"].TenantImage}`
              : "no image"
          }
          userIDImage={
            record.request_type.TypeName === "تعديل بيانات المستفيد"
              ? `data:image/jpg;base64,${record["tenant-datum"].CustomerImage}`
              : "no image"
          }
          beneficiaryName={
            record.request_type.TypeName === "تعديل بيانات المستفيد"
              ? `${record["tenant-datum"].TenantName}`
              : "no data"
          }
          footPrint={
            record.request_type.TypeName === "نقل الاعمدة المعارضة"
              ? `data:image/jpg;base64,${record.TransferringPole.Footprint}`
              : "no image"
          }
          locationImage={
            record.request_type.TypeName === "نقل الاعمدة المعارضة"
              ? `data:image/jpg;base64,${record.TransferringPole.LocationOfPole}`
              : "no image"
          }
          // electricianName={
          //   item.request_type.TypeName === "تحويل من مؤقت الى دائم"
          //     ? `${item["subscription-status"].ElectricianName}`
          //     : "no data"
          // }
          // electricianPhoneNumber={
          //   item.request_type.TypeName === "تحويل من مؤقت الى دائم"
          //     ? `${item["subscription-status"].ElectricianNo}`
          //     : "no data"
          // }
        />
      ),
    },
  ];

  const paginatedApplications = applications.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="">
      <button className="CSE-dashboard-btn" onClick={fetchApplications}>
        الطلبات
      </button>
      {applications.length > 0 ? (
        <div className="info appInfo">
          <div className="table-container">
            <Table
              columns={columns}
              dataSource={paginatedApplications}
              pagination={false}
            />
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={applications.length}
              onChange={handlePageChange}
              showSizeChanger
              pageSizeOptions={["4", "8", "12"]}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Applications;
