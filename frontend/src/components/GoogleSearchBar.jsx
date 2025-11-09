import React, { useState, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import "./GoogleSearchBar.css";

const GoogleSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce(async (term) => {
<<<<<<< HEAD
      if (!term.trim()) {
        setSearchResults([]);
        return;
      }
=======
      // if (!term.trim()) {
      //   setSearchResults([])
      //   return
      // }
>>>>>>> 4119ad332a19238760b7152365daade5ff292b28

      try {
        console.log(term);
        const response = await fetch(
          `api/actions?user_input=${encodeURIComponent(term)}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data.results || []);
      } catch (error) {
        console.error("Search failed:", error);
      }
    }, 300),
    []
<<<<<<< HEAD
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="google-search-container">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <div className="input-wrapper">
=======
  )
 

  const handleInputChange = (e) => { setSearchTerm(e.target.value) }





  return (

    <div className="flex min-h-screen flex-col items-center bg-white p-4">
        <form
    onSubmit={(e) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }}
  className="mb-8 w-full max-w-2xl"
  >
        <div className="relative">
>>>>>>> 4119ad332a19238760b7152365daade5ff292b28
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            placeholder="Search for issues that matter to you"
          />
          <button type="submit" className="search-button">
            <Search size={20} />
          </button>
        </div>
      </form>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GoogleSearchBar;
