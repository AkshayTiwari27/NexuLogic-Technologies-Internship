import { useState, useEffect } from "react";
import axios from "axios";

const useNewsApi = (category, query) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        if (category && category !== "general") {
          url += `&category=${category}`;
        }
        if (query) {
          url += `&q=${encodeURIComponent(query)}`;
        }
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (err) {
        setError(err.message || "Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, query]);

  return { articles, loading, error };
};

export default useNewsApi;
