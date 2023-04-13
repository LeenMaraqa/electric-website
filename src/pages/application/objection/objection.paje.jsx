import MainForm from "../../../components/main form/main-form.component";
import Header from "../../../components/header/header.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "../check elec meter/check-elec-meter.css";
const Objection = () => {
  const type = "اعتراض على تقدير بدل استهلاك";
  const reason = "sth";
  return (
    <div className="check-elec-meter">
       <Header/>
      <div className="aboutapp">
        <h2>طلب اعتراض على تقدير بدل استهلاك خلال فترة عطل عداد   </h2>
        <div>.... عزيزي المشترك نرجو من حضرتك </div>
      </div>
      <MainForm type={type} reason ={reason} />
    </div>
  );
};
export default Objection;