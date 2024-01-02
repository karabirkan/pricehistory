"use client";
import React from "react";

const Searchbar = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        className="searchbar-input"
        type="text"
        placeholder="Enter product link"
      />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
