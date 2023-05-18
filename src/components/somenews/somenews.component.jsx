import "./somenews.css";
import test from "../../images/test.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NewsDetails from "../../pages/news details/news-details.page";
const SomeNews = () => {
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
  const lastThreeNews = news.slice(-3);

  return (
    <div className="somenews">
      <h3> اخر الاخبار </h3>
      <div className="news">
        {lastThreeNews.map((newsItem) => (
          
          <div
            className="example"
            key={newsItem.id}
            onClick={() => handleNewsSelect(newsItem)}
          >
            <img
              width={300}
               height={210}
              src={newsItem.coverImage}
              alt=""
            />
            <div className="title">
              <Link
              onClick={() => handleNewsSelect(newsItem)} key={newsItem.id}
                style={{ color: "black", textDecoration: "none" }}
                className="title"
              >
                {newsItem.title}{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SomeNews;
