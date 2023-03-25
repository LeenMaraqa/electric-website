import serv1 from "../../images/s1.png";
import serv2 from "../../images/s2.png";
import serv3 from "../../images/s3.png";
import serv4 from "../../images/s4.png";
import serv5 from "../../images/s5.png";
import serv6 from "../../images/s6.png";
import serv7 from "../../images/s7.png";
import serv8 from "../../images/s8.png";
import serv9 from "../../images/s9.png";
import serv10 from "../../images/s10.png";
import servicesImage from "../../images/servicespage.png";
import "./eservices.css";
import { Link, useNavigate } from "react-router-dom";

const EservicesPage = () => {
  return (
    <div className="eservices-page">
      <div className="about-services">
        <img src={servicesImage} alt="" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          esse provident labore mollitia quod non itaque doloremque, aperiam
          nostrum pariatur eum laudantium, voluptatibus tenetur corporis
          voluptates ipsa ipsam? Dolorum, tenetur.
        </div>
      </div>
      <h2>الخدمات الالكترونية</h2>
      <div className="wrapper">
        <div className="eservice">
          <div className="service-logo">
            <img src={serv1} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/checkElectricityMeter"
              style={{ color: "black", textDecoration: "none" }}
            
            >
              <h3>طلب فحص عداد</h3>
            </Link>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>

        <div className="eservice">
          <div className="service-logo">
            <img src={serv2} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/billToCard"
              style={{ color: "black", textDecoration: "none" }}
            >
              <h3>طلب تحويل من فاتورة الى كرت</h3>
            </Link>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv3} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/commercialToHome"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب تعديل التعرفة من تجاري الى منزلي</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv4} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/transferpoles"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب نقل الاعمدة و الشبكات المعارضة للبناء</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv5} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/weakElecProblem"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب معالجة ضعف التيار</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv6} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/streetLighting"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب تركيب وحدة انارة للشارع</h3>
            </Link>{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv7} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/maintenance"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب صيانة</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv8} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/modifybeneficiarysdata"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب تعديل بيانات المستفيد</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv9} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/reduceInstallment"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب تخفيض أقساط ديون الكهرباء</h3>
            </Link>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv3} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/temporaryToPermanent"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب تعديل التعرفة من مؤقت الى دائم</h3>
            </Link>

            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv10} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            <Link
              to="/objection"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <h3>طلب اعتراض على تقدير بدل استهلاك خلال فترة عطل عداد</h3>
            </Link>{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In optio
              magni rem at.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EservicesPage;
