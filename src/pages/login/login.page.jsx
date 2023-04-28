import LoginForm from "../../components/login-form/login-form.component";
import CSE_Dashboard from "../CSE-Dashboard/CSE-Dashboard.page";
import "./login.css";
import Header from "../../components/header/header.component";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ onLogin = () => {} }) => {
  const navigate = useNavigate();

  const handleLogin = async (id, password) => {
    // if (typeof onLogin !== "function") {
    //   console.log("onLogin is not a function");
    //   console.log("5");
    //   throw new Error("onLogin is not a function");
    //   console.log("6");
    // }
    try {
      const response = await fetch(
        // "https://my.api.mockaroo.com/users.json?key=6b7de8e0&__method=POST",
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, password }),
        }
      );
      if (response.ok) {
      const { userId,token, role } = await response.json();
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
   //   onLogin();
      const userRole = localStorage.getItem("role");
        {
          userRole === "Admin" ? (
            console.log("admin") // <AdminPage />
          ) : userRole === "user" ? (
            console.log("user") //navigate("/customer_Dashboard")
          ) : userRole === "CSE" ? (
            navigate("/CSE_Dashboard")
          ) : (
            <LoginPage onLogin={() => window.location.reload()} />
          );
        }
    } else {
        alert('Invalid credentials. Please try again.');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
export default LoginPage;
