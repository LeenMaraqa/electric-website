import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
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
    // empNum: "",
    empName: "",
    role: "",
    id: "",
    phoneNum: "",
    // address: "",
    startDate: "",
    // empImage: null,
    endDate: "",
    reason: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };
  
  const [phoneNumError, setPhoneNumError] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handlePhoneNumChange = (event) => {
    const value = event.target.value;
    setEmpData((prevState) => ({
      ...prevState,
      phoneNum: value,
    }));
    if (value.length !== 9 || !value.startsWith("5")) {
      setPhoneNumError("يجب ان يتكون رقم الهاتف من 9 خانات و يبدأ ب 5");
    } else {
      setPhoneNumError("");
    }
  };

  const handleIdChange = (event) => {
    const value = event.target.value;
    setEmpData((prevState) => ({
      ...prevState,
      id: value,
    }));
    if (value.length !== 9) {
      setIdError("يجب ان يتكون رقم الهوية من 9 خانات ");
    } else {
      setIdError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setEmpData((prevState) => ({
      ...prevState,
      password: value,
    }));
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongRegex.test(value) || value.length < 8) {
      setPasswordError(
        "يرجى ملاحظة أن كلمة المرور يجب أن تتكون من 8 أحرف على الأقل وتشمل حروفاً كبيرة وصغيرة وأرقاماً ورموزاً "
      );
    } else {
      setPasswordError("");
    }
  };
  useEffect(() => {
    if (
      empData.empName &&
      empData.role &&
      empData.id &&
      empData.phoneNum &&
      empData.password &&
      phoneNumError === "" &&
      idError === ""&&
      passwordError==""//passwordError
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [empData, phoneNumError, idError,passwordError]);//passwordError

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      // empNum,
      empName,
      role,
      // address,
      phoneNum,
      id,
      startDate,
      // empImage: null,
      endDate,
      reason,
      password,
    } = empData;
    console.log(empData);
    try {
      const response = await fetch(
        "http://localhost:5000/api/employees/NewEmployee",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(empData),
        }
      );
      if (response.status === 201) {
        alert("تمت اضافة الموظف بنجاح");
      } else {
        alert("حدثت مشكلة في اضافة الموظف يرجى المحاولة مرة اخرى");
      }
    } catch (error) {
      console.log("An error occurred while submitting the form:", error);
    }
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
            {/* <div>
              <label>رقم الموظف</label>
              <input
                type="number"
                name="empNum"
                value={empData.empNum}
                onChange={handleInput}
                required
              />
            </div> */}
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
                onChange={handlePhoneNumChange}
                required
              />
              {phoneNumError && (
                <p className="validation_message">
                  يجب ان يتكون رقم الهاتف من 9 خانات و يبدأ ب 5
                </p>
              )}
            </div>
            {/* <div>
              <label> العنوان</label>
              <input
                type="text"
                name="address"
                value={empData.address}
                onChange={handleInput}
                required
              />
            </div> */}
            <div>
              <label>رقم هوية الموظف</label>
              <input
                type="number"
                name="id"
                value={empData.id}
                onChange={handleIdChange}
                required
              />
              {idError && (
                <p className="validation_message">
                  يجب ان يتكون رقم الهوية من 10 خانات
                </p>
              )}
            </div>
            <div>
              <label> كلمة السر </label>
              <input
                type="password"
                name="password"
                value={empData.password}
                onChange={handlePasswordChange}
                required  
              />
              {passwordError && (
                <p className="validation_message">
                 {passwordError}
                </p>
              )}
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
            <button disabled={!isValid} className="addbtn" type="submit">
              اضافة{" "}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddEmp;
