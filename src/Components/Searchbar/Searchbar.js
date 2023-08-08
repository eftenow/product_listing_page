import React, { useState } from 'react';
import data from '../../assets/ProjectData/data.js';
import './Searchbar.css';


function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const [filteredShoes, setFilteredShoes] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    
    if (query.length > 1) {
      const matches = data.filter(shoe => shoe.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredShoes(matches);
    } else {
      setFilteredShoes([]);
    }
  };

  const handleSuggestionClick = (shoeName) => {
    setSearchText(shoeName);
    setFilteredShoes([]); // Clear the suggestions once a suggestion is clicked
  };

  return (
    <div className="search-container">
      <input className="search-text" type="text" value={searchText} onChange={handleSearchChange} placeholder="Search..." />
      <div className="suggestions-box">
        {filteredShoes.map(shoe => (
          <div key={shoe.title} className="suggestion" onClick={() => handleSuggestionClick(shoe.title)}>
            <img src={shoe.img} alt={shoe.title} className="suggestion-img" />
            <span className="suggestion-text">{shoe.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Searchbar;
