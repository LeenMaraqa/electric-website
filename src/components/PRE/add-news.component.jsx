import { Button, Modal } from "antd";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import "../admin/add-emp/add-emp.css";
import "./report-news-style.css"

const AddNews = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const [newsData, setNewsData] = useState({
    empNum: "",// ***/
    title: "",
    coverImage: null,
    image: null, //mutiple
    body: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setNewsData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { empNum, title, image, body, coverImage } = newsData;
    console.log(newsData);

    const formDataToSend = new FormData();
    formDataToSend.append("empNum", empNum);
    formDataToSend.append("title", title);
    formDataToSend.append("image", image);
    formDataToSend.append("body", body);
    formDataToSend.append("coverImage", coverImage);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("تم نشر الخبر");
      } else {
        alert("حدثت مشكلة في نشر الخبر");
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <>
      <Button className="Empbtn" type="primary" onClick={showModal}>
        اضافة خبر{" "}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="custom-modal"
      >
        <div>
          <form className="report-news-form" onSubmit={handleSubmit}>
            <div>
              <label>عنوان الخبر</label>
              <input
                type="text"
                name="title"
                value={newsData.title}
                onChange={handleInput}
                placeholder="أدخل عنوان الخبر"
                required
              />
            </div>
            <div>
              <label> قم بادخال محتوى الخبر </label>
              {/* 
              <input
                type="text"
                height={50}
                name="body"
                value={newsData.body}
                onChange={handleInput}
              /> */}
              <ReactQuill 
                name="body"
                value={newsData.body}
                onChange={handleInput}
                style={{ height: "400px",margin:"30px 0px" }}
              />
              <br />
            </div>
            <div>
              <label> صورة الغلاف</label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                name="coverImage"
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label> صور اخرى تتعلق بالخبر</label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                name="image"
                onChange={handleInput}
                required
              />
            </div>

            <button className="addbtn" type="submit">
              نشر{" "}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default AddNews;
