import React from "react";
import { useNavigate } from "react-router-dom";

const NewsItem = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/article", { state: { article } });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px"
          }}
        />
      )}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};

export default NewsItem;
