import { Button, Modal } from "antd";
import { useState } from "react";
import "./report-news-style.css";
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
  const userId = localStorage.getItem("userId");
  const [reportData, setReportData] = useState({
    empNum: userId, 
    title: "",
    coverImage: null,
    pdfReport: null,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };
  const handleFiles = (e) => {
    const { name, files } = e.target;
    setReportData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { empNum, title, pdfReport, coverImage } = reportData;
    console.log("reportData ", reportData);

    const formData = new FormData();
    formData.append("empNum", empNum);
    formData.append("pdfReport", pdfReport);
    formData.append("title", title);
    formData.append("coverImage", coverImage);

    //API LINK///upload
    const response = await fetch("http://localhost:5000/api/report", {
      method: "POST",
      body: formData,
    });
    console.log("response", response);
    console.log("formdata", formData);
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
                value={reportData.title}
                name="title"
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>صورة الغلاف</label>
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFiles}
                name="coverImage"
                required
              />
            </div>
            <div>
              {" "}
              <label> قم باختيار الملف الذي تريد رفعه</label>
              <input
                type="text"
                // accept="application/pdf"
                onChange={handleInput}
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
