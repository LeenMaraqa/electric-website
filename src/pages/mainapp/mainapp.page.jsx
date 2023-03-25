import "./mainapp.page.css";
import MainForm from "../../components/main form/main-form.component";

const MainApp = () => {
  return (
    <div className="main-app-page">
      <form action="">
        <MainForm/>
      <div className="send-btn">     
        <button
            className="button-5"
            type="submit"
            // onClick={()=> navigate('/home')}
          >
          ارسال
          </button></div>
   </form>
        
    </div>
  );
};
export default MainApp;
