import { useNavigate } from "react-router-dom";
import "../login/login.css";
import { useRef, useState } from "react";
// import logo from "../../images/login2.jpg"
const EmpLoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    const email = emailRef.current.value;
    const empPassword = passwordRef.current.value;
    // change API
    const response = await fetch("https://my.api.mockaroo.com/app.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, empPassword }),
    });
    if (response.ok) {
      alert("welcome <> ");
      // navigate("/home");
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message);
      console.log(errorData.message);
      alert("Error <> ");
    }
  };

  return (
    <div className="login-page">
      <div className="slider-part">
        {/* <img src={login} alt="" width={1000} /> */}
        {/* <img src={logo} width={500} height={500}alt="" /> */}
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <div>
          {" "}
          <h2> تسجيل الدخول للموظفين</h2>
        </div>
        <div className="login-field">
          <label>
            <b> البريد الالكتروني</b>
          </label>
          <input
            className="login-input"
            name="email"
            type="email"
            placeholder="example@hepco.com"
            ref={emailRef}
            required
          />
          <label>
            <b>كلمة المرور </b>
          </label>
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="كلمة المرور "
            ref={passwordRef}
            required
          />
        </div>
        <div className="login-submit">
          <button className="button-5" type="submit">
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpLoginPage;
