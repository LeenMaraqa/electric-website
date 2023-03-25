import "./header.css";
import logo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, PhoneCall, EnvelopeSimple } from "phosphor-react";
import slide3 from "../../images/slide3.jpg";

const Header = () => {
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
            <img src={logo} alt="" width={113} height={113} />
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
          
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>الاخبار</span>
          </Link>{" "}
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>التقارير السنوية</span>
          </Link>{" "}
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>عطاءات</span>
          </Link>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>النظام الكهربائي</span>
          </Link>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span> الطاقة المتجددة</span>
          </Link>
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>من نحن</span>{" "}
          </Link>{" "}
          <Link style={{ color: "black", textDecoration: "none" }}>
            <span>اتصل بنا</span>
          </Link>{" "}
        </div>
        <div className="login-btn">
          <button
            className="button-5"
            onClick={() => (window.location.href = "login")}
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
