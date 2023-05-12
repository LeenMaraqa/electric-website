import { Button, Modal } from "antd";
import { useState } from "react";
// import "../admin/add-emp/add-emp.css";
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

  const handleFileUpload = (event) => {
    setPdfReport(event.target.files[0]);
  };
  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("pdfReport", pdfReport);
    formData.append("title", title);

    //API LINK///upload
    const response = await fetch("", {
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
          <form onSubmit={handleSubmit}>
            <label>عنوان التقرير</label>
            <input
              type="text"
              placeholder=" أدخل عنوان التقرير مثلا التقرير السنوي 2023"
              value={title}
              name="title"
              onChange={handleNameChange}
              required
            />
            <label> قم باختيار الملف الذي تريد رفعه</label>
            <input
            type="file" 
            onChange={handleFileUpload} 
            name="pdfReport"
            required />
            <button className="addbtn" type="submit">
              Upload
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddReport;
