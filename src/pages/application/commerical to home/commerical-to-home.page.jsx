import MainForm from "../../../components/main form/main-form.component";
import axios from "axios";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "../check elec meter/check-elec-meter.css";
const CommericalToHome = () => {
  const type = "تحويل من تجاري الى منزلي";
  return (
    <div className="check-elec-meter">
      <div className="aboutapp">
        <h2>طلب تركيب انارة للشارع </h2>
        <div>.... عزيزي المشترك نرجو من حضرتك </div>
      </div>
      <MainForm type={type} />
    </div>
  );
};
export default CommericalToHome;