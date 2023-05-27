import React from "react";
import Header from "../../components/header/header.component";
import "./news-details.css";
import { useParams,useNavigate,generatePath } from "react-router-dom";
import { useState, useEffect } from "react";
const NewsDetails = ({ news }) => {
  // const [id, setId] = useState();
  const navigate = useNavigate();
  // const { id } = useParams();
  // const [newsItem, setNewsItem] = useState(null);
console.log("news",news);
  useEffect(() => {
    // news.ID && navigate(generatePath("/view-news/:id", {  news.id }));
  }, [ news.ID]);

  
  return (
    <div>
      <Header />
      <div className="new-details">
        {" "}
        <div className="new-title">{news.title}</div>
        <div className="new-body">{news.body}</div>
        <img
          className="new-image"
          src={`data:image/png;base64,${news.image}`}
          alt={news.title}
        />
      </div>
    </div>
  );
};

export default NewsDetails;

