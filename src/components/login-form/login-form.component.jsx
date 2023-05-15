import { useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";
// import { Button, Modal } from "antd";
// import LoginPage from "../../pages/login/login.page";

  const LoginForm = ({ onLogin = () => {} }) => {
    const userIDRef = useRef();
    const userPasswordRef = useRef();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = userIDRef.current.value;
      const password = userPasswordRef.current.value;
      onLogin(id, password);
    
  };
  return (
    <div className="login-page">
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
