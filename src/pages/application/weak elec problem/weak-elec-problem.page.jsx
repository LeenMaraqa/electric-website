import MainForm from "../../../components/main form/main-form.component";
import Header from "../../../components/header/header.component";
import { useState } from "react";
import "../../../components/main form/main-form.css";
import "../check elec meter/check-elec-meter.css";
const WeakElecProblem = () => {
  const type = "معالجة مشكلة ضعف التيار";
  const reason = "sth";
  
  return (
    <div className="check-elec-meter">
       <Header/>
      <div className="aboutapp">
        <h2>طلب معالجة ضعف التيار </h2>
        {/* <div>.... عزيزي المشترك نرجو من حضرتك </div> */}
      </div>
      <MainForm type={type} reason ={reason} />
    </div>
  );
};
export default WeakElecProblem;