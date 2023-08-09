import Brand from './Filters/Brand/Brand';
import Colors from './Filters/Colors/Colors';
import Gender from './Filters/Gender/Gender';
import { } from './Filters/Gender/Gender'
import Price from './Filters/Price/Price';
import Rating from './Filters/Rating/Rating';
import Use from './Filters/Use/Use';
import './Sidebar.css'
import { useState } from 'react';


const Sidebar = ({ filterValues, setFilterValues }) => {
    const handleFilterChange = (filterName, newValue) => {

        setFilterValues(prevState => {
            // the 'isAlreadyActive' checks if the user is selecting a filter value, which was already selected, knowing if that is the case or not
            // lets us determine wheter we should de-select certain filter or apply it.
            const isAlreadyActive = prevState[filterName].active && prevState[filterName].value === newValue;

            return {
                ...prevState,
                [filterName]: {
                    value: newValue,
                    active: !isAlreadyActive
                }
            };
        });
    };


    return (
        <>
            <aside className="sidebar">
                <h1 className="filters-title-container">Filters</h1>
                <Gender filterValues={filterValues.gender} handleFilterChange={handleFilterChange} />
                <Price filterValues={filterValues.price} handleFilterChange={handleFilterChange} />
                <Colors filterValues={filterValues.color} handleFilterChange={handleFilterChange} />
                <Brand filterValues={filterValues.brand} handleFilterChange={handleFilterChange} />
                <Use filterValues={filterValues.use} handleFilterChange={handleFilterChange} />
                <Rating filterValues={filterValues.rating} handleFilterChange={handleFilterChange} />
            </aside>
        </>
    )
}


export default Sidebar;