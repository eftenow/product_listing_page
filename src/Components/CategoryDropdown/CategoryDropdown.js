import { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import './CategoryDropdown.css';

const CategoryDropdown = ({ onCategoryChange, selectedCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const categories = ['Sneakers', 'Flats', 'Skate', 'Heels'];

    const handleCategoryChange = (category) => {
        onCategoryChange(category);
        setIsOpen(false);
    };


    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => setIsOpen(prev => !prev)}>
                Categories <FaSortDown />
            </button>
            <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                {categories.map(category => (
                    <button 
                        key={category} 
                        className={selectedCategory === category ? 'selected-category' : ''} 
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default CategoryDropdown;
