import Header from "../../components/header/header.component";
import { useState, useEffect } from "react";
import NewsDetails from "../news details/news-details.page";
import { Link } from "react-router-dom";
import "./view-news.css";
const View_News = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/news.json?key=f4868e30"
      );
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleNewsSelect = (newsItem) => {
    setSelectedNews(newsItem);
  };
  if (selectedNews) {
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
                src={newsItem.coverImage}
                alt=""
              />
              {/* <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/view-news/${newsItem.id}`}
              > */}
              <div className="new-title">{newsItem.title}</div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default View_News;
