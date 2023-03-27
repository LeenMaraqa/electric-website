import MainForm from "../../../components/main form/main-form.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "../check elec meter/check-elec-meter.css";
const TransferPoles = () => {
  const type = "نقل الاعمدة المعارضة";
  const reason = "sth";

  return (
    <div className="check-elec-meter">
      <div className="aboutapp">
        <h2> طلب نقل الاعمدة و الشبكات المعارضة للبناء </h2>
        <div>.... عزيزي المشترك نرجو من حضرتك </div>
      </div>
      <MainForm type={type} reason={reason} />
    </div>
  );
};
export default TransferPoles;