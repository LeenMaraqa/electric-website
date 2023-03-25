import { useState } from "react";
import "./main-form.css";
const MainForm = (props) => {
  const [appInfo, setAppInfo] = useState({
    username: "",
    phonenumber: "",
    address: "",
    date: new Date().toDateString() + " " + new Date().toLocaleTimeString(),
    appStatus: "new",
    appType: props.type,
    reason: "",
    // userIDImage: "",
    // beneficiaryIDImage: "",
    beneficiaryName: "",
    electricianName: "",
    electricianPhoneNumber: "",
    polesLocation: "",
    // footPrint: "",
    // locationImage: "",
    serviceID: "",
  });
  const [msg, setMsg] = useState();
  const [userIDImage, setUserIDImage] = useState();
  const [beneficiaryIDImage, setBeneficiaryIDImage] = useState();
  const [footPrint, setFootPrint] = useState();
  const [locationImage, setLocationImage] = useState();
  let formData =new FormData();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAppInfo({ ...appInfo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const appValue = {
      username: appInfo.username,
      phoneNum: appInfo.phonenumber,
      address: appInfo.address,
      appType: props.type,
      appStatus: appInfo.appStatus,
      date: appInfo.date,
      reason: appInfo.reason,
      electricianName: appInfo.electricianName,
      electricianPhoneNumber: appInfo.electricianPhoneNumber,
      beneficiaryName: appInfo.beneficiaryName,
      serviceID: appInfo.serviceID,
      userIDImage: userIDImage,
      beneficiaryIDImage: beneficiaryIDImage,
      footPrint: footPrint,
      locationImage: locationImage,
    };

    let res = await fetch("https://my.api.mockaroo.com/app.json", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appValue),
    });
    
    let resjson = await res.json();
    console.log("res : ", res);
    // console.log("resjson : ", resjson);
    console.log("appvalue :", appValue);
    // e.target.reset();
  //  setAppInfo("");
    
  };
  return (
    <div className="main-app">
      <form onSubmit={handleSubmit}>
        <div className="main-form">
          <label>
            <b>اسم المشترك</b>
          </label>
          <input
            className=""
            type="text"
            name="username"
            value={appInfo.username}
            onChange={handleInput}
            placeholder=" يرجى ادخال الاسم الرباعي"
            required
          />
          <label>
            <b>رقم الخدمة</b>
          </label>
          <input
            className=""
            name="serviceID"
            value={appInfo.serviceID}
            onChange={handleInput}
            type="number"
            placeholder="01/01/99999"
          />
          <label>
            <b>رقم الهاتف</b>
          </label>
          <input
            className=""
            name="phonenumber"
            value={appInfo.phonenumber}
            onChange={handleInput}
            type="number"
            placeholder="رقم الهاتف"
          />
          <label>
            <b>العنوان </b>
          </label>
          <input
            className=""
            name="address"
            value={appInfo.address}
            onChange={handleInput}
            type="text"
            placeholder="يرجى توضيح اسم المنطقة و الشارع"
          />
        </div>
        {props.reason == "sth" && (
          <div className="optional">
            <label>
              <b>سبب تقديم الطلب </b>
            </label>
            <input
              className=""
              name="reason"
              value={appInfo.reason}
              onChange={handleInput}
              type="text"
              placeholder=""
            />
          </div>
        )}
        {props.type == "TemporaryToPermanent" && (
          <div className="optional">
            <label>
              <b> اسم مهندس الكهرباء </b>
            </label>
            <input
              className=""
              name="electricianName"
              value={appInfo.electricianName}
              onChange={handleInput}
              type="text"
              placeholder=""
            />
            <label>
              <b> رقم هاتف مهندس الكهرباء </b>
            </label>
            <input
              className=""
              name="electricianPhoneNumber"
              value={appInfo.electricianPhoneNumber}
              onChange={handleInput}
              type="number"
              placeholder=""
            />
          </div>
        )}
        {props.type == "ModifyData" && (
          <div>
            <div className="optional">
              <label>
                <b>اسم المستفيد</b>
              </label>
              <input
                className=""
                name="beneficiaryName"
                value={appInfo.beneficiaryName}
                onChange={handleInput}
                type="text"
                placeholder=""
              />
            </div>
            <div className="optional">
              <label>
                <b>يرجى ارفاق صورة هوية المشترك</b>
              </label>
              <input
                className=""
                // name="electricianName"
                // value={appInfo.electricianName}
                onChange={(event) => {
                  const file = event.target.files[0];
                  setUserIDImage(file);
                  // formData.append('file',event.target.files[0]);
                }}
                type="file"
                placeholder=""
                accept="image/jpeg, image/png"
              />
            </div>
            <div className="optional">
              <label>
                <b>يرجى ارفاق صورة هوية المستفيد</b>
              </label>
              <input
                className=""
                // name="electricianName"
                // value={appInfo.electricianName}
                onChange={(event) => {
                  const file = event.target.files[0];
                  setBeneficiaryIDImage(file);
                  // formData.append('file',event.target.files[0]);
                }}
                type="file"
                placeholder=""
                accept="image/jpeg, image/png"
              />
            </div>
          </div>
        )}
        {props.type == "TransferPoles" && (
          <div className="optional">
            <div>
              {" "}
              <label>
                <b>يرجى ارفاق صورة توضح المشكلة </b>
              </label>
              <input
                className=""
                // name="electricianName"
                // value={appInfo.electricianName}
                onChange={(event) => {
                  const file = event.target.files[0];
                  setLocationImage(file);
                  // formData.append('file',event.target.files[0]);
                }}
                type="file"
                placeholder=""
                accept="image/jpeg, image/png"
              />
            </div>
            <div>
              {" "}
              <label>
                <b>يرجى ارفاق مخطط المساحة </b>
              </label>
              <input
                className=""
                // name="electricianPhoneNumber"
                // value={appInfo.electricianPhoneNumber}
                onChange={event =>{
                  const file =event.target.files[0];
                  setFootPrint (file);
                  // formData.append('file',event.target.files[0]);
                }}
                type="file"
                placeholder=""
                accept="image/jpeg, image/png"

              />
            </div>
          </div>
        )}
        <div className="send-btn">
          <button className="button-5" type="submit" >
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};
export default MainForm;
