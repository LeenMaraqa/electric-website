import { Button, Modal } from "antd";
import { useState } from "react";
// import "../admin/add-emp/add-emp.css";
import "./report-news-style.css"
const AddReport = () => {
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

  const [pdfReport, setPdfReport] = useState(null);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleFileUpload = (event) => {
    setPdfReport(event.target.files[0]);
  };
  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };
  const handleCoverImage = (event) => {
    setCoverImage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("pdfReport", pdfReport);
    formData.append("title", title);
    formData.append("coverImage", coverImage);

    //API LINK///upload
    const response = await fetch("http://localhost:5000/api/reports", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <>
      <Button className="Empbtn" type="primary" onClick={showModal}>
        التقرير السنوي{" "}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
      >
        <div>
          <form className="report-news-form" onSubmit={handleSubmit}>
            <div>
              {" "}
              <label>عنوان التقرير</label>
              <input
                type="text"
                placeholder=" أدخل عنوان التقرير مثلا التقرير السنوي 2023"
                value={title}
                name="title"
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label>صورة الغلاف</label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleCoverImage}
                name="coverImage"
                required
              />
            </div>
            <div>
              {" "}
              <label> قم باختيار الملف الذي تريد رفعه</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                name="pdfReport"
                required
              />
            </div>

            <button className="addbtn" type="submit">
              نشر
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddReport;
