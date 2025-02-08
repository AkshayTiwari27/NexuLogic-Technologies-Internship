import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <p style={{ textAlign: "center" }}>No article data available.</p>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1rem",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            marginBottom: "1rem"
          }}
        />
      )}
      <p>{article.content || article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007bff" }}
      >
        Read full article
      </a>
    </div>
  );
};

export default Article;
