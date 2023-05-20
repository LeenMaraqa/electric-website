import MainForm from "../../../components/main form/main-form.component";
import Header from "../../../components/header/header.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
// import "../check elec meter/check-elec-meter.css";
import "./bill-to-card.css"
const BillToCard = () => {
  const type = "تحويل من فاتورة الى كرت";
  return (
    <div className="check-elec-meter">
      <Header/>
      <div className="aboutapp">
        <h2>طلب تحويل الاشتراك من فاتورة الى كرت </h2>
        {/* <div>.... عزيزي المشترك نرجو من حضرتك </div> */}
      </div>
      <MainForm type={type} />
    </div>
  );
};
export default BillToCard;
