import { useState, useEffect } from "react";
import "./signup.css";
import Header from "../../components/header/header.component";
import cover from "../../images/logincover15.png";

const SignUpPage = () => {
  const [customerData, setCustomerData] = useState({
    id: "",
    // dob: "",
    phoneNumber: "",
    password: "",
  });

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const handleDOB = (event) => {
  //   const value = event.target.value;
  //   setCustomerData((prevState) => ({
  //     ...prevState,
  //     dob: value,
  //   }));
  // };
  const handlePhoneNumChange = (event) => {
    const value = event.target.value;
    setCustomerData((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
    if (value.length !== 9 || !value.startsWith("5")) {
      setPhoneNumberError("يجب ان يتكون رقم الهاتف من 9 خانات و يبدأ ب 5");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleIdChange = (event) => {
    const value = event.target.value;
    setCustomerData((prevState) => ({
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
    setCustomerData((prevState) => ({
      ...prevState,
      password: value,
    }));
    const strongRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //!strongRegex.test(value) ||
    if (value.length < 8) {
      setPasswordError(
        "يرجى ملاحظة أن كلمة المرور يجب أن تتكون من 8 أحرف على الأقل "
      );
    } else {
      setPasswordError("");
    }
  };
  useEffect(() => {
    if (
      customerData.id &&
      // customerData.dob &&
      customerData.phoneNumber &&
      customerData.password &&
      idError === "" &&
      passwordError === "" &&
      phoneNumberError === ""
    ) {
      setIsValid(true);
      console.log("1");
    } else {
      setIsValid(false);
      console.log("2");
    }
  }, [customerData, phoneNumberError, idError, passwordError]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hgyfyftyft");
    const { id, phoneNumber, password } = customerData;
    console.log("customerData", customerData);
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, phoneNumber, password }),
      });
      console.log("response", response);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      const data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        // const role ="customer";
        // localStorage.setItem("userId", customerData.id);
        // // localStorage.setItem("token", token);
        // localStorage.setItem("role", role);
        setErrorMessage("تم انشاء الحساب بنجاح");
        window.location.href = "/login";
      } else if (response.status === 401) {
        setErrorMessage(
          "لا يمكنك انشاء حساب في حال لم تكن مشترك لدى شركة الكهرباء"
        );
      } else if (response.status === 202) {
        setErrorMessage("لديك حساب بالفعل يرجى تسجيل الدخول");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="signup-page">
      <Header />
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <h2>انشاء حساب جديد</h2>
          </div>
          <div className="signup-field">
            {" "}
            <label>رقم الهوية</label>
            <input
              className="signup-input"
              type="number"
              name="id"
              value={customerData.id}
              onChange={handleIdChange}
              required
            />
            {idError && <p className="validation_message">{idError}</p>}
          </div>
          {/* <div className="signup-field">
            {" "}
            <label>تاريخ الميلاد</label>
            <input
              className="signup-input"
              type="date"
              name="dob"
              value={customerData.dob}
              onChange={handleDOB}
              required
            />
          </div> */}

          <div className="signup-field">
            {" "}
            <label>رقم الهاتف</label>
            <input
              className="signup-input"
              type="number"
              name="phoneNumber"
              value={customerData.phoneNumber}
              onChange={handlePhoneNumChange}
              required
            />
            {phoneNumberError && (
              <p className="validation_message">{phoneNumberError}</p>
            )}
          </div>
          <div className="signup-field">
            <label>كلمة المرور</label>
            <input
              className="signup-input"
              type="password"
              name="password"
              value={customerData.password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="validation_message">{passwordError}</p>
            )}
          </div>
          {errorMessage && <p className="validation_message">{errorMessage}</p>}
          <button
            type="submit"
            disabled={!isValid}
            className="button-5 signup-btn "
          >
            ارسال
          </button>
        </form>
        {/* <img className="signup-page-image" src={cover} width={650} height={477} /> */}
      </div>
    </div>
  );
};
export default SignUpPage;
