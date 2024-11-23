import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Import the CSS for this component

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch(searchText, category);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
