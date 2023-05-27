import "./eservices.css";
import service1 from "../../images/service11.jpg";
import service2 from "../../images/service2.webp";
import service3 from "../../images/service3.jpg";
import { Link } from "react-router-dom";
const Eservices = () => {
  const userId = localStorage.getItem("userId");

  return (
    <div className="eservices-component">
      <div className="eservice-title">الخدمات الالكترونية </div>
      <div className="wrapper-eservice">
        <div className="service1">
          <img src={service1} width={330} height={300} alt="" />
          {userId ? (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
              to="/checkElectricityMeter"
            >
              <div className="app-title">طلب فحص عداد</div>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              <div className="app-title">طلب فحص عداد</div>
            </Link>
          )}
          {/* <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div> */}
        </div>
        <div className="service2">
          <img src={service2} width={330} height={300} alt="" />
          {userId ? (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
              to="/streetLighting"
            >
              <div className="app-title">طلب تركيب انارة للشارع</div>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              <div className="app-title">طلب تركيب انارة للشارع</div>
            </Link>
          )}
          {/* <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div> */}
        </div>
        <div className="service3">
          <img src={service3} width={330} height={300} alt="" />
          {userId ? (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
              to="/maintenance"
            >
              <div className="app-title">طلب صيانة </div>
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              <div className="app-title">طلب صيانة </div>
            </Link>
          )}{" "}
          {/* <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Eservices;
