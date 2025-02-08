import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ articles }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        padding: "1rem"
      }}
    >
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
