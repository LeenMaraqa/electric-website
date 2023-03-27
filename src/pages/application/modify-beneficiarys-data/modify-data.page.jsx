import MainForm from "../../../components/main form/main-form.component";
import "../../../components/main form/main-form.css";
import "../check elec meter/check-elec-meter.css";
const ModifyData = () => {
  const type = "تعديل بيانات المستفيد";
 
  return (
    <div className="check-elec-meter">
      <div className="aboutapp">
        <h2> طلب تعديل بيانات المستفيد </h2>
        <div>.... عزيزي المشترك نرجو من حضرتك </div>
      </div>
      <MainForm type={type} />
    </div>
  );
};
export default ModifyData;
