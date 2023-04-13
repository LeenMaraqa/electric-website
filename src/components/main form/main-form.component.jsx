import { useState } from "react";
import "./main-form.css";
const MainForm = (props) => {
  const [appInfo, setAppInfo] = useState({
    username: "",
    phonenumber: "",
    address: "",
    //date: new Date().toDateString() + " " + new Date().toLocaleTimeString(),
    appStatus: "جديد",
    appType: props.type,
    reason: "",
    userIDImage: null,
    beneficiaryIDImage: null,
    beneficiaryName: "",
    electricianName: "",
    electricianPhoneNumber: "",
    footPrint: null,
    locationImage: null,
    serviceID: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const formData = new FormData();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAppInfo({ ...appInfo, [name]: value });
  };
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setAppInfo((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      username,
      phonenumber,
      address,
      appStatus,
      appType,
      reason,
      userIDImage,
      beneficiaryIDImage,
      beneficiaryName,
      electricianName,
      electricianPhoneNumber,
      footPrint,
      locationImage,
      serviceID,
    } = appInfo;

    if (
      props.type == "نقل الاعمدة المعارضة" ||
      props.type == "تعديل بيانات المستفيد"
    ) {
      const formDataToSend = new FormData();
      formDataToSend.append("username", username);
      formDataToSend.append("phonenumber", phonenumber);
      formDataToSend.append("address", address);
      formDataToSend.append("appStatus", appStatus);
      formDataToSend.append("appType", appType);
      formDataToSend.append("reason", reason);
      formDataToSend.append("userIDImage", userIDImage);
      formDataToSend.append("beneficiaryIDImage", beneficiaryIDImage);
      formDataToSend.append("beneficiaryName", beneficiaryName);
      //formDataToSend.append("polesLocation", polesLocation);
      formDataToSend.append("footPrint", footPrint);
      formDataToSend.append("locationImage", locationImage);
      formDataToSend.append("serviceID", serviceID);

      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/formdata.json?key=6b7de8e0&__method=POST",
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        console.log("response : ", response);
        console.log("appInfo : ", appInfo);

        if (response.ok) {
          alert("تم ارسال طلبك بنجاح");
        } else {
          alert("حدثت مشكلة في ارسال الطلب");
        }
      } catch (error) {
        console.log("An error occurred while submitting the form:", error);
      }
    }
    // change API
    else {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/formdata.json?key=6b7de8e0&__method=POST",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(appInfo),
          }
        );

        console.log("response : ", response);
        console.log("appInfo : ", appInfo);

        if (response.status === 200) {
          alert("تم ارسال طلبك بنجاح");
        } else {
          alert("حدثت مشكلة في ارسال الطلب");
        }
      } catch (error) {
        console.log("An error occurred while submitting the form:", error);
      }
    }
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
        {props.type == "تحويل من مؤقت الى دائم" && (
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
        {props.type == "تعديل بيانات المستفيد" && (
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
                accept="image/jpeg, image/png"
                type="file"
                id="userIDImage"
                name="userIDImage"
                onChange={handleImageChange}
              />
            </div>
            <div className="optional">
              <label>
                <b>يرجى ارفاق صورة هوية المستفيد</b>
              </label>
              <input
                accept="image/jpeg, image/png"
                type="file"
                id="beneficiaryIDImage"
                name="beneficiaryIDImage"
                onChange={handleImageChange}
              />
            </div>
          </div>
        )}

        {props.type == "نقل الاعمدة المعارضة" && (
          <div className="optional">
            <div>
              {" "}
              <label>
                <b>يرجى ارفاق صورة توضح المشكلة </b>
              </label>
              <input
                accept="image/jpeg, image/png"
                type="file"
                id="locationImage"
                name="locationImage"
                onChange={handleImageChange}
              />
            </div>
            <div>
              {" "}
              <label>
                <b>يرجى ارفاق مخطط المساحة </b>
              </label>
              <input
                accept="image/jpeg, image/png"
                type="file"
                id="footPrint"
                name="footPrint"
                onChange={handleImageChange}
              />
            </div>
          </div>
        )}
        <div className="send-btn">
          <button className="button-5" type="submit">
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};
export default MainForm;
