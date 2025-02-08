import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "general";

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  const handleCategoryChange = (cat) => {
    if (cat === "general") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <nav
      style={{
        display: "flex",
        padding: "1rem",
        background: "#333",
        color: "#fff",
        alignItems: "center"
      }}
    >
      <h2 style={{ marginRight: "2rem" }}>News App</h2>
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/?category=${cat}`}
          onClick={() => handleCategoryChange(cat)}
          style={{
            marginRight: "1rem",
            color: currentCategory === cat ? "#FFD700" : "#fff",
            textDecoration: "none"
          }}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
