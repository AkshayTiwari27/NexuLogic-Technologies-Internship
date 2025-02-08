import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search news..."
        style={{
          width: "80%",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
};

export default SearchBar;
