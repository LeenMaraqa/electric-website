import slide1 from "../../images/slide11.jpg";
import slide2 from "../../images/slide2.webp";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide1.jpg"
import slide5 from "../../images/slide5.jpg"
import "./slider.css"

import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Slider = () => (
  <Carousel autoplay >
      <div className="slider">
      <img src={slide1} width={1350} height={700}  alt=""/>
    </div>
    <div className="slider">
      <img src={slide3} width={1350} height={700} alt="" />
    </div>
    <div className="slider">
      <img src={slide2} width={1350} height={700} alt="" />
    </div>
    <div className="slider">
      <img src={slide4} width={1350} height={700} alt=""  />
    </div>
    <div className="slider">
      <img src={slide5} width={1350} height={700} alt=""  />
    </div>
  </Carousel>
);

export default Slider;
