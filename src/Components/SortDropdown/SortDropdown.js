import React from 'react';
import './SortDropdown.css';
import { FaSort } from 'react-icons/fa';


const SortDropdown = ({ onSortOptionChange }) => {
    const handleSortChange = (option) => {
        onSortOptionChange(option);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">Sort <FaSort/></button>
            <div className="dropdown-content">
                <button onClick={() => handleSortChange('Alphabetical A-Z')}>Alphabetical A-Z</button>
                <button onClick={() => handleSortChange('Alphabetical Z-A')}>Alphabetical Z-A</button>
                <button onClick={() => handleSortChange('Price Ascending')}>Lowest to highest price</button>
                <button onClick={() => handleSortChange('Price Descending')}>Highest to lowest price</button>
                <button onClick={() => handleSortChange('Discount Descending')}>Highest discount</button>
            </div>
        </div>
    );
};


export default SortDropdown;