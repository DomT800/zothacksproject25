// src/pages/search.jsx
import React from "react";
import GoogleSearchBar from "@/components/GoogleSearchBar";
import "./search.css";

const Search = () => {
  return (
    <div className="search-container">
      <main className="search-main">
        <section className="search-section">
          <header className="search-header">
            <h1>Politics, simply put</h1>
          </header>
          <div className="search-bar-wrapper">
            <GoogleSearchBar />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;
