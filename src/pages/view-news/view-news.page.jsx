import Header from "../../components/header/header.component";
import { useState, useEffect } from "react";
import NewsDetails from "../news details/news-details.page";
import { Link,generatePath } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

import "./view-news.css";
const View_News = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  // const { id } = useParams();
  // console.log("id",id);
  const [id, setId] = useState();
  const navigate = useNavigate();
  
  const handleProceed = (e) => {
    
      id && navigate(generatePath("/view-news/:id", { id }));
    };
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/advertisement"
      );
      const data = await response.json();
      const reversedNews = data.reverse();

      setNews(reversedNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleNewsSelect = (newsItem) => {
    setId(newsItem.Id);
    setSelectedNews(newsItem);
    console.log(newsItem);
   
  };
  if (selectedNews) {
    // id && navigate(generatePath("/view-news/:id", { id }));
    console.log("selectedNews",selectedNews);
    return <NewsDetails news={selectedNews} />;
  
  }

  return (
    <div className="news-page">
      <Header />
      <div>
        <div className="view-news">
          {news.map((newsItem) => (
            <div 
              className="news-item"
              key={newsItem.Id}
              onClick={() => handleNewsSelect(newsItem)}
            >
              <img
                className="news-cover-image"
                src={ `data:image/png;base64,${newsItem.coverImage}`
                }
                alt=""
              />
              {/* <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/view-news/${newsItem.id}`}
              > */}
              <div className="titles">{newsItem.title}</div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default View_News;
