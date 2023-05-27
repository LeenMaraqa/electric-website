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
import Header from "../../components/header/header.component";
const EservicesPage = () => {
  const userId = localStorage.getItem("userId");

  return (
    <div className="eservices-page">
      <Header />
      <div className="about-services">
        <img className="services-page-image" src={servicesImage} alt="" />
        <div className="about-services-desc">
          شركة كهرباء الخليل تعتبر الشركة الرائدة في مجال الخدمات الكهربائية.
          نحن ملتزمون بتقديم خدمات متميزة لعملائنا. نحن نفهم أهمية الكهرباء في
          حياتكم اليومية ونسعى جاهدين لتلبية احتياجاتكم وتوفير راحة البال
          والموثوقية. تعتمد سمعتنا على خبرتنا الواسعة وكفاءتنا في تركيب وصيانة
          الشبكات الكهربائية والعدادات وحل المشاكل الفنية بسرعة وفعالية. نحن
          نهتم بتوفير طاقة كهربائية فعالة ومستدامة لمجتمعنا. نحرص على استخدام
          أحدث التقنيات والممارسات الصديقة للبيئة لتحقيق الكفاءة العالية وتقليل
          التكاليف. بالإضافة إلى ذلك، نحن ملتزمون بتعزيز الوعي بتوفير الطاقة
          وتشجيع التوجه نحو استخدام مستدام للكهرباء.
        </div>
      </div>
      <h2>الخدمات الالكترونية</h2>
      <div className="wrapper">
        <div className="eservice">
          <div className="service-logo">
            <img src={serv1} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {/* <Link
              to="/checkElectricityMeter"
              style={{ color: "black", textDecoration: "none" }}
            >
              <h3>طلب فحص عداد</h3>
            </Link>
            <span>
              {" "}
              يمكنك من خلال هذه الخدمة التحقق من صحة قراءة العداد لضمان استهلاك
              الكهرباء الصحيح
            </span> */}
            {userId ? (
              <Link
                to="/checkElectricityMeter"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب فحص عداد</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب فحص عداد</h3>
              </Link>
            )}
            <span>
              يمكنك من خلال هذه الخدمة التحقق من صحة قراءة العداد لضمان استهلاك
              الكهرباء الصحيح
            </span>
          </div>
        </div>

        <div className="eservice">
          <div className="service-logo">
            <img src={serv2} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/billToCard"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تحويل من فاتورة الى كرت</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تحويل من فاتورة الى كرت</h3>
              </Link>
            )}
            <span>
              طلب تحويل طريقة الدفع من الفاتورة إلى الدفع عبر كرت مسبق الدفع
              للكهرباء
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv3} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/commercialToHome"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب تعديل التعرفة من تجاري الى منزلي</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تعديل التعرفة من تجاري الى منزلي</h3>
              </Link>
            )}
            <span>
              طلب تغيير الاشتراك من تجاري إلى منزلي لضبط تكلفة الكهرباء وفقًا
              للاستخدام المنزلي.
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv4} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/transferpoles"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب نقل الاعمدة و الشبكات المعارضة للبناء</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب نقل الاعمدة و الشبكات المعارضة للبناء</h3>
              </Link>
            )}
            <span>
              طلب نقل اعمدة الكهرباء المتعارضة مع عملية بناء ، أو الاعمدة التي
              تميل للسقوط و تشكل خطر
            </span>{" "}
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv5} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {" "}
            {userId ? (
              <Link
                to="/weakElecProblem"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب معالجة ضعف التيار</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب معالجة ضعف التيار</h3>
              </Link>
            )}
            <span>
              طلب إصلاح وتعزيز قدرة التيار الكهربائي للتغلب على مشكلة ضعف التيار
              وضمان استقرار الكهرباء{" "}
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv6} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/streetLighting"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب تركيب وحدة انارة للشارع</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تركيب وحدة انارة للشارع</h3>
              </Link>
            )}
            <span>
              طلب تركيب وحدة إنارة مخصصة لتوفير الإضاءة اللازمة في الشوارع
              وتحسين الرؤية والسلامة للمارة
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv7} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/maintenance"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب صيانة</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب صيانة</h3>
              </Link>
            )}
            <span>
              طلب خدمة لإصلاح وصيانة أنظمة الكهرباء والمعدات للحفاظ على أداء
              موثوق وتجنب حدوث أعطال أو انقطاع في التيار الكهربائي.
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv8} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/modifybeneficiarysdata"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تعديل بيانات المستفيد</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تعديل بيانات المستفيد</h3>
              </Link>
            )}
            <span>
              طلب تحديث وتعديل المعلومات الشخصية للمستفيد من أجل تحديث البيانات
              وضمان توصيل الخدمات الكهربائية وفقًا للبيانات الصحيحة
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv9} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/reduceInstallment"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب تخفيض أقساط ديون الكهرباء</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تخفيض أقساط ديون الكهرباء</h3>
              </Link>
            )}
            <span>
              طلب تقديم تسهيلات وتخفيض في مبالغ السداد المستحقة للديون
              الكهربائية لتمكين المستفيد من تسديد الديون بطريقة مرنة وميسرة.
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv3} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/temporaryToPermanent"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب تعديل حالة الاشتراك من مؤقت الى دائم</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب تعديل حالة الاشتراك من مؤقت الى دائم</h3>
              </Link>
            )}
            <span>
              طلب تحويل حالة الاشتراك الكهربائي من وضع مؤقت إلى وضع دائم
            </span>
          </div>
        </div>
        <div className="eservice">
          <div className="service-logo">
            <img src={serv10} alt="" width={65} height={90} />
          </div>
          <div className="service-desc">
            {userId ? (
              <Link
                to="/objection"
                style={{ color: "black", textDecoration: "none" }}
              >
                {" "}
                <h3>طلب اعتراض على تقدير بدل استهلاك خلال فترة عطل عداد</h3>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h3>طلب اعتراض على تقدير بدل استهلاك خلال فترة عطل عداد</h3>
              </Link>
            )}
            <span>
              طلب تصحيح التقدير المبني على استهلاك الكهرباء أثناء فترة عطل
              العداد لتجنب الفواتير المبالغ فيها
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EservicesPage;
