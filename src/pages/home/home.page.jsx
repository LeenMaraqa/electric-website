import Slider from "../../components/imageslider/slider.component";
import Eservices from "../../components/eservices/eservices.component";
import SomeNews from "../../components/somenews/somenews.component";
import Header from "../../components/header/header.component";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
      <Eservices />
      <SomeNews />
    </div>
  );
};
export default Home;
