import MainForm from "../../../components/main form/main-form.component";
import Header from "../../../components/header/header.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "./check-elec-meter.css";
const CheckElecMeter = () => {
  const type = "فحص عداد";
  return (
    <div className="check-elec-meter">
      <Header />
      <div className="aboutapp">
      <h2>طلب فحص عداد</h2>
        {/* <div>.... عزيزي المشترك نرجو من حضرتك </div> */}
      </div>{" "}
      {/* <div className="description">      

        وصف الخدمة : خدمة فحص عداد هي خدمة تقدمها لكمباني للعملاء الذين يرغبون
        في التحقق من حالة وأداء عداد الكهرباء الخاص بهم. تتضمن هذه الخدمة فحص
        العداد للتأكد من سلامته ودقته في قياس استهلاك الكهرباء. يتم تنفيذ الفحص
        بواسطة فريق فني مؤهل يقوم بفحص العداد وقراءة القيم المسجلة ومقارنتها
        بالاستهلاك الفعلي. يساعد هذا الفحص على اكتشاف أي مشاكل في العداد وضمان
        دقة فواتير الكهرباء وتجنب الفواتير المفاجئة.
      </div> */}
      <MainForm type={type} />
    </div>
  );
};
export default CheckElecMeter;
