import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
