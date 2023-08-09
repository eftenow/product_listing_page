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
                <button onClick={() => handleSortChange('Price Ascending')}>Price Ascending</button>
                <button onClick={() => handleSortChange('Price Descending')}>Price Descending</button>
            </div>
        </div>
    );
};


export default SortDropdown;