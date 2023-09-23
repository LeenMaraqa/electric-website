
import LoginForm from "../../components/login-form/login-form.component";
import CSE_Dashboard from "../CSE-Dashboard/CSE-Dashboard.page";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.component";
import { useState, useRef } from "react";
import cover from "../../images/logincover15.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const userIDRef = useRef();
  const userPasswordRef = useRef();
  const [loginMessage, setLoginMessage] = useState("");
  // const [idErrorr, setIdErrorr] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const[userID,setUserID]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userIDRef.current.value;
    const password = userPasswordRef.current.value;
    // onLogin(id, password);
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setLoginMessage(responseData.message);
        const { userId, token, role } = responseData;

        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        const userRole = localStorage.getItem("role");
        if (userRole === "Admin") {
          navigate("/Admin_Dashboard");
        } else if (userRole === "customer") {
          navigate("/home");
          window.location.reload();
        } else if (userRole === "CSE") {
          navigate("/CSE_Dashboard");
        } else if (userRole === "PRE") {
          navigate("/PRE_Dashboard");
        } else {
          navigate("/");
        }
      }
      // else {
      //   const responseData = await response.json();
      //   setLoginMessage(responseData.message);
      //   console.log("loginMessage else", loginMessage);
      // }
      else if (response.status === 401) {
        setLoginMessage("كلمة المرور غير صحيحة يرجى المحاولة مرة اخرى");
        console.log("Wrong password");
      } else if (response.status === 403) {
        setLoginMessage("يرجى انشاء حساب");
      }else{
        setLoginMessage("رقم هوية غير صالح");

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="login-content">
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
            {/* {idErrorr == false && (
              <p className="validation_message">{idErrorr} </p>
            )} */}
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
          {loginMessage && <p className="validation_message">{loginMessage}</p>}
          <div className="login-submit">
            <button className="button-5" type="submit">
              تسجيل الدخول
            </button>
          </div>
          <Link
            style={{
              color: "grey",
              textDecoration: "none",
              fontWeight: "lighter",
              fontSize: "13px",
            }}
            to="/signup"
          >
            ليس لديك حساب؟ إنشاء حساب جديد
          </Link>
          {/* <p>{loginMessage}</p>  */}
        </form>
        <img className="login-image" src={cover} width={850} height={625} />
      </div>
    </div>
  );
};

export default LoginPage;
