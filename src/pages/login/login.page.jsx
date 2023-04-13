import LoginForm from "../../components/login-form/login-form.component";
import CSE_Dashboard from "../CSE-Dashboard/CSE-Dashboard.page";
import "./login.css";
import Header from "../../components/header/header.component";

const LoginPage = ({ onLogin = () => {} }) => {
  console.log("onLogin: ", onLogin);
  console.log("4");
  const handleLogin = async (id, password) => {
    if (typeof onLogin !== "function") {
      console.log("onLogin is not a function");
      console.log("5");
      throw new Error("onLogin is not a function");
      console.log("6");
    }
    try {
      console.log("7");
      const response = await fetch(
        "https://my.api.mockaroo.com/users.json?key=6b7de8e0&__method=POST",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, password }),
        }
      );
      console.log("8");
      const { token, role } = await response.json();
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      console.log("9");
      onLogin();
      console.log("10");
      if (response.status === 200) {
        console.log("Login successful");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const role = localStorage.getItem("role");

  {
    role === "Admin" ? (
      console.log("admin") // <AdminPage />
    ) : role === "user" ? (
      console.log("admin") // <UserPage />
    ) : role === "CSE" ? (
      <CSE_Dashboard />
    ) : (
      <LoginPage onLogin={() => window.location.reload()} />
    );
  }

  return (
    <div>
      <Header />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
export default LoginPage;
