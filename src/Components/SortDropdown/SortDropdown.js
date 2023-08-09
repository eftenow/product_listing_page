import React, { useState } from 'react';
import './SortDropdown.css';
import { FaSortAmountUp } from 'react-icons/fa';



const SortDropdown = ({ onSortOptionChange, selectedSortOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sortOptions = ['Alphabetical A-Z', 'Alphabetical Z-A', 'Price Ascending', 'Price Descending', 'Discount Descending'];

    const handleSortChange = (option) => {
        onSortOptionChange(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => setIsOpen(prev => !prev)}><FaSortAmountUp /></button>
            <div className={`sort dropdown-content ${isOpen ? 'open' : ''}`}>
                {sortOptions.map(opt => (
                    <button 
                    key={opt}
                        className={selectedSortOption === opt ? 'selected-category' : ''}
                        onClick={() => handleSortChange(opt)}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SortDropdown;
