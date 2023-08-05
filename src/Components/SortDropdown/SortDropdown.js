import React from 'react';
import './SortDropdown.css';
import { FaSort } from 'react-icons/fa';


const SortDropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn">Sort <FaSort/></button>
            <div className="dropdown-content">
                <a href="#">Alphabetical A-Z</a>
                <a href="#">Alphabetical Z-A</a>
                <a href="#">Price Ascending</a>
                <a href="#">Price Descending</a>
            </div>
        </div>
    );
};

export default SortDropdown;