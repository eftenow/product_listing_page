import React, { useState } from 'react';
import './SortDropdown.css';
import { FaSortAmountUp } from 'react-icons/fa';



const SortDropdown = ({ onSortOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSortChange = (option) => {
        onSortOptionChange(option);
        setIsOpen(false); 
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}><FaSortAmountUp /></button>
            <div className={`sort dropdown-content ${isOpen ? 'open' : ''}`}>
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
