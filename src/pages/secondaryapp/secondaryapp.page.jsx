import "../mainapp/mainapp.page";
// import "../../components/main form/main-form"
import MainForm from "../../components/main form/main-form.component";
import "./secondaryapp.css"
import "../../components/main form/main-form.css"
const SecApp = () => {
  return (
    <div className="main-app-page">
        <MainForm/>
        <div className="reason">    <label for="uname">
          <b>توضيح سبب تقديم الطلب</b>
        </label>
        <input
          className=""
          type="text"
          required
        /></div>
    
      <div className="send-btn">     
        <button
            className="button-5"
            type="submit"
          >
          ارسال
          </button></div>
   
        
    </div>
  );
};
export default SecApp;