import { useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";
import login from "../../images/login.jpg";
const LoginPage = () => {
  const userIDRef = useRef();
  const userPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({
      id: userIDRef.current.value,
      password: userPasswordRef.current.value,
    });
    const userID = userIDRef.current.value;
    const userPassword = userPasswordRef.current.value;
    // change API
    const response = await fetch("https://my.api.mockaroo.com/app.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, userPassword }),
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
      </div>

      <form onSubmit={handleLogin} className="login-form">
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

export default LoginPage;
