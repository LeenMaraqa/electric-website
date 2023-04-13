import MainForm from "../../../components/main form/main-form.component";
import Header from "../../../components/header/header.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "./check-elec-meter.css";
const CheckElecMeter = () => {
 
  const type = "فحص عداد";
  return (
    <div className="check-elec-meter">
       <Header/>
      <div className="aboutapp">
        <h2>طلب فحص عداد</h2>
        <div>.... عزيزي المشترك نرجو من حضرتك </div>
      </div>
      <MainForm type={type} />
 
    </div>
  );
};
export default CheckElecMeter;
