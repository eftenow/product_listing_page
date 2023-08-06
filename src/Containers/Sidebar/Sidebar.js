import Gender from './Gender/Gender';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css'
import { useState } from 'react';


const Sidebar = () => {
    const [filterValues, setFilterValues] = useState({
        gender: "",
        price: "",
        colors: "",
    });

    const handleFilterChange = (filterName, value) => {
        setFilterValues(prevState => {
            return { ...prevState, [filterName]: value };
        });
    };

    return (
        <>
            <section className="sidebar">
                <div className="filters-title-container">
                    <h1>Filters</h1>
                </div>

                <Gender filterValues={filterValues.gender} handleFilterChange={handleFilterChange} />
                <Price filterValues={filterValues.price} handleFilterChange={handleFilterChange} />
                <Colors filterValues={filterValues.colors} handleFilterChange={handleFilterChange} />

            </section>
        </>
    )
}



export default Sidebar;