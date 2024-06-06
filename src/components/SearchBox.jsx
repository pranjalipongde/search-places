import React, { useEffect, useRef } from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "/") {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search places..."
        onKeyDown={handleSearch}
      />
      <button className="shortcut" onClick={handleButtonClick}>
        Ctrl + /
      </button>
    </div>
  );
};

export default SearchBox;
