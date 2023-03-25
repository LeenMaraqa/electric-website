import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import Slider from "../../components/imageslider/slider.component";
import login from "../../images/login.jpg";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="slider-part">
        {/* <Slider width={800}/> */}
        {/* <img src={login} alt="" width={1000} /> */}
      </div>

      <form className="login-form">
        <div>
          {" "}
          <h2>تسجيل الدخول</h2>
        </div>
        <div class="login__field"></div>
        <label for="uname">
          <b>رقم الهاتف</b>
        </label>
        <input
          className="login__input"
          label="phonenumber"
          name="email"
          type="number"
          placeholder="رقم الهاتف"
          required
        />
        <label for="uname">
          <b>رقم الهوية</b>
        </label>
        <input
          className="login__input"
          label="Password"
          name="password"
          type="password"
          placeholder="رقم الهوية"
          required
        />
        <div className="login__submit">
          <button className="button-5" type="submit">
            تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
