import "./header.css";
import logo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, PhoneCall, EnvelopeSimple } from "phosphor-react";
import { handleLogout } from "../logout/logout.component";
import { useState } from "react";
import LoginForm from "../login-form/login-form.component";
import { Button, Modal } from "antd";


const userId = localStorage.getItem("userId");
const role = localStorage.getItem("role");
console.log(userId);

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="header">
      
      <div className="header-top">
        <div className="left">
          <span>شارع عين خير الدين</span>
          <MapPin size={24} color="#f47629" weight="bold" />
        </div>

        <div className="right">
          <div>
            {" "}
            <PhoneCall size={24} color="#f47629" weight="bold" />
            <span>+97022928182</span>
          </div>
          <div>
            {" "}
            <EnvelopeSimple size={24} color="#f47629" weight="bold" />
            <span>hepco@mail.com</span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="" width={118} height={88} />
          </div>
          <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
            <span>الرئيسية</span>
          </Link>
          <Link
            to="/eservices"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span>الخدمات</span>
          </Link>{" "}
          <Link
            to="/view-news"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span>الاخبار</span>
          </Link>{" "}
          <Link
            to="/view-reports"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span>التقارير السنوية</span>
          </Link>{" "}
          {role == "customer" && (
            <div className="customer_header">
              <Link
                to="/view-subscription"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span> اشتراكاتي</span>
              </Link>{" "}
              <Link
                to="/view-application"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span>طلباتي </span>
              </Link>
              <Link
                to="/view-installments"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span> اقساطي </span>
              </Link>
              <Link
                to="/view-bills"
                style={{ color: "black", textDecoration: "none" }}
              >
                <span>فواتيري </span>{" "}
              </Link>{" "}
            </div>
          )}
          {/* <Link style={{ color: "black", textDecoration: "none" }}>
            <span>عطاءات</span>
          </Link>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>النظام الكهربائي</span>
          </Link>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span> الطاقة المتجددة</span>
          </Link> */}
          {role != "customer" && (
            <div className="customer_header">
              {" "}
              <Link style={{ color: "black", textDecoration: "none" }}>
                <span>من نحن</span>{" "}
              </Link>{" "}
              <Link style={{ color: "black", textDecoration: "none" }}>
                <span>اتصل بنا</span>
              </Link>{" "}
            </div>
          )}
        </div>
        <div className="login-btn">
          {userId != null ? (
            <button className="button-5" onClick={handleLogout}>
              {" "}
              تسجيل الخروج
            </button>
          ) : (
            <button
              className="button-5"
              onClick={() => (window.location.href = "login")}
            >
              {" "}
              تسجيل الدخول
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
