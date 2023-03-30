import "./eservices.css";
import service1 from "../../images/service11.jpg";
import service2 from "../../images/service2.webp";
import service3 from "../../images/service3.jpg";
import { Link } from "react-router-dom";
const Eservices = () => {
  return (
    <div className="eservices-component">
      <h3>الخدمات الالكترونية </h3>
      <div className="wrapper-eservice">
        <div className="service1">
          <img src={service1} width={330} height={300} alt="" />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            className="title"
          >
            طلب فحص عداد
          </Link>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div>
        </div>
        <div className="service2">
          <img src={service2} width={330} height={300} alt="" />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            className="title"
          >
            طلب تركيب انارة للشارع
          </Link>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div>
        </div>
        <div className="service3">
          <img src={service3} width={330} height={300} alt="" />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            className="title"
          >
            طلب صيانة الاعمدة و الشيكات
          </Link>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eservices;
