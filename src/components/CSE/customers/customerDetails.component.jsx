import { useState, useEffect } from "react";
import { Button, Modal } from "antd";

const CustomerDetails = ({ data }) => {
  console.log("typeof data");

  console.log(typeof data);

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <>
      <Button className="details" type="primary" onClick={showModal}>
        تفاصيل اخرى{" "}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
      >
        <div>
          <ul>
            {data.map((service) => (
              <div key={service.ServiceID}>
                <p>رقم الخدمة: {service.ServiceID}</p>
                <p>عنوان الخدمة: {service.Address}</p>
                <p>نوع الاشتراك: {service.SubscriptionType}</p>
                <p>حالة الاشتراك: {service.SubscriptionStatus}</p>
                <p>تاريخ الاشتراك: {service.createdAt}</p>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default CustomerDetails;
