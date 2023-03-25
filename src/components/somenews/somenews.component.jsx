import "./somenews.css";
import test from "../../images/test.png";
import { Link } from "react-router-dom";
const SomeNews = () => {
  return (
    <div className="somenews">
      <h3> اخر الاخبار </h3>
      <div className="news">
        <div className="example">
          <img src={test} width={330} height={300} alt="" />
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              عنوان الخبر
            </Link>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis{" "}
            </div>
          </div>
        </div>
        <div className="example">
          <img src={test} width={330} height={300} alt="" />
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              عنوان الخبر
            </Link>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis{" "}
            </div>
          </div>
        </div>
        <div className="example">
          <img src={test} width={330} height={300} alt="" />
          <div>
            {" "}
            <Link
              style={{ color: "black", textDecoration: "none" }}
              className="title"
            >
              عنوان الخبر
            </Link>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SomeNews;
