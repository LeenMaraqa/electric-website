import React from "react";
import Header from "../../components/header/header.component";
import "./news-details.css"
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
const NewsDetails = ({ news }) => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetchNewsItem();
  }, [id]);

  const fetchNewsItem = async () => {
    try {
      const response = await fetch(
"https://my.api.mockaroo.com/news/${id}.json?key=3f67f180");
      const data = await response.json();
      setNewsItem(data);
    } catch (error) {
      console.error('Error fetching news item:', error);
    }
  };

  if (!newsItem) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="new-details">
        {" "}
        <h2 className="new">{news.title}</h2>
        <img className="new-image" src={news.image} alt={news.title} />
        <div className="new">{news.body}</div>
      </div>
    </div>
  );
};

export default NewsDetails;

