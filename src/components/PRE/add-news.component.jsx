import { Button, Modal } from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./report-news-style.css";

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
  const userId = localStorage.getItem("userId");

  const [newsData, setNewsData] = useState({
    empNum: "44",
    title: "",
    coverImage: null,
    image: null,
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
    console.log("newsData submit", newsData);

    const formDataToSend = new FormData();
    formDataToSend.append("empNum", empNum);
    formDataToSend.append("title", title);
    formDataToSend.append("image", image);
    formDataToSend.append("body", body);
    formDataToSend.append("coverImage", coverImage);

    try {
      const response = await fetch("http://localhost:5000/api/advertisement", {
        method: "POST",
        body: formDataToSend,
      });
      console.log(formDataToSend);
      console.log("response : ", response);
      console.log("newsData : ", newsData);
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
        // height={600}
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
              {/* <input
                type="text"
                height={100}
                name="body"
                value={newsData.body}
                onChange={handleInput}
              /> */}
              <textarea
                name="body"
                value={newsData.body}
                onChange={handleInput}
                cols="61"
                rows="15"
              ></textarea>
              {/* <ReactQuill
                name="body"
                value={newsData.body}
                onChange={handleInput}
                style={{ height: "350px", margin: "30px 0px" }}
              /> */}
              <br />
            </div>
            <div>
              <label> صورة الغلاف</label>
              <input
                type="file"
                accept="image/jpg, image/png"
                name="coverImage"
                onChange={handleImageChange}
                required
              />
            </div>
            <div>
              <label> صور اخرى تتعلق بالخبر</label>
              <input
                type="file"
                accept="image/jpg, image/png"
                name="image"
                onChange={handleImageChange}
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
