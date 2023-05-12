import { Button, Modal } from "antd";
import { useState } from "react";
import "./add-emp.css";
const AddEmp = () => {
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
  const [empData, setEmpData] = useState({
    empNum: "",
    empName: "",
    role: "",
    id: "",
    phoneNum: "",
    address: "",
    startDate: "",
    // empImage: null,
    endDate: "",
    reason: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      empNum,
      empName,
      role,
      address,
      phoneNum,
      id,
      startDate,
      // empImage: null,
      endDate,
      reason,
    } = empData;
    console.log(empData);
    try {
        const response = await fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empData),
      });

      if (response.status === 200) {
        alert("تمت اضافة الموظف بنجاح");
      } else {
        alert("حدثت مشكلة في اضافة الموظف يرجى المحاولة مرة اخرى");
      }
    } catch (error) {
      console.log("An error occurred while submitting the form:", error);
    }
    window.location.reload();
  };
  return (
    <>
      <Button className="Empbtn" type="primary" onClick={showModal}>
        اضافة موظف{" "}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
      >
        <div>
          <form className="addEmpForm" onSubmit={handleSubmit}>
            <div>
              <label>رقم الموظف</label>
              <input
                type="number"
                name="empNum"
                value={empData.empNum}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>اسم الموظف</label>
              <input
                type="text"
                name="empName"
                value={empData.empName}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>رقم الهاتف </label>
              <input
                type="number"
                name="phoneNum"
                value={empData.phoneNum}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label> العنوان</label>
              <input
                type="text"
                name="address"
                value={empData.address}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label>رقم هوية الموظف</label>
              <input
                type="number"
                name="id"
                value={empData.id}
                onChange={handleInput}
                required
              />
            </div>
            {/* <div>
              <label>تاريخ انضمام الموظف </label>
              <input
                type="date"
                name="startDate"
                value={empData.startDate}
                onChange={handleInput}
                required
              />
            </div> */}
            <div>
              <label>نوع الوظيفة </label>
              <select name="role" value={empData.role} onChange={handleInput}>
                <option value="">اختر القسم الذي يعمل به الموظف</option>
                <option value="CSE"> خدمات المشتركين </option>
                <option value="PRE">علاقات عامة </option>
                <option value="Admin"> IT</option>
              </select>
            </div>

            <button className="addbtn" type="submit">
              اضافة{" "}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddEmp;
