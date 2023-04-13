import { useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";

const LoginForm = ({ onLogin = () => {} }) => {
  const userIDRef = useRef();
  const userPasswordRef = useRef();
  console.log("1");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userIDRef.current.value;
    const password = userPasswordRef.current.value;
    console.log("2");
    onLogin(id, password);
    console.log("3");
  };
  return (
    <div className="login-page">
      <div className="slider-part">
        {/* <img src={login} alt="" width={1000} /> */}
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div>
          {" "}
          <h2>تسجيل الدخول</h2>
        </div>
        <div className="login-field">
          <label>
            <b>رقم الهوية</b>
          </label>
          <input
            className="login-input"
            name="IDNumber"
            type="number"
            placeholder="رقم الهوية"
            ref={userIDRef}
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
            ref={userPasswordRef}
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

export default LoginForm;
