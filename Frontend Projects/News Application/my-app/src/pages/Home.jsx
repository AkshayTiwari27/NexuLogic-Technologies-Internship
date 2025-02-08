import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import useNewsApi from "../hooks/useNewsApi";

const Home = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "general";
  const [query, setQuery] = useState("");

  const { articles, loading, error } = useNewsApi(category, query);

  return (
    <div>
      <SearchBar onSearch={(value) => setQuery(value)} />
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

export default Home;
