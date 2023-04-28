import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "./moreDetails.css";
const MoreDetails = ({
  customerName,
  requestTypeName,
  phoneNumber,
  address,
  reason,
  beneficiaryIDImage,
  userIDImage,
  beneficiaryName,
  footPrint,
  locationImage,
  electricianName,
  electricianPhoneNumber,
}) => {
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
        // title=" تفاصيل اخرى"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
      >
        {/* <p> تفاصيل اخرى</p> */}
        <div>
          <p>اسم المشترك : {customerName}</p>
          {/* <p>Service ID: {serviceId}</p> */}
          <p>رقم هاتف المشترك : {phoneNumber}</p>
          <p>العنوان: {address}</p>
          <p>سبب تقديم الطلب : {reason}</p>

          {requestTypeName == "تعديل بيانات المستفيد" && (
            <div>
              {" "}
              <p> اسم المستفيد : {beneficiaryName}</p>
              <div>صورة هوية المستفيد : </div>
              <img
                src={beneficiaryIDImage}
                alt=""
                width={200}
                height={200}
              />{" "}
              <div>صورة هوية المالك :</div>
              <img src={userIDImage} alt="" width={200} height={200} />{" "}
            </div>
          )}
          {requestTypeName == "نقل الاعمدة المعارضة" && (
            <div>
              <div>صورة توضح المشكلة : </div>
              <img src={locationImage} alt="" width={200} height={200} />
              <div>مخطط المساحة : </div>
              <img src={footPrint} alt="" width={200} height={200} />
            </div>
          )}
          {requestTypeName == "تحويل من مؤقت الى دائم" && (
            <div>
              <p>اسم مهندس الكهرباء : {electricianName}</p>
              <p>رقم هاتف مهندس الكهرباء:{electricianPhoneNumber}</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default MoreDetails;
