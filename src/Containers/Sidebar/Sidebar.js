import Brand from './Filters/Brand/Brand';
import Colors from './Filters/Colors/Colors';
import Gender from './Filters/Gender/Gender';
import {} from './Filters/Gender/Gender'
import Price from './Filters/Price/Price';
import Rating from './Filters/Rating/Rating';
import Use from './Filters/Use/Use';
import './Sidebar.css'
import { useState } from 'react';


const Sidebar = () => {
    const [filterValues, setFilterValues] = useState({
        gender: "",
        price: "",
        colors: "",
        brand: "",
        use: "",
        rating: "",
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
                <Brand filterValues={filterValues.brand} handleFilterChange={handleFilterChange} />
                <Use filterValues={filterValues.use} handleFilterChange={handleFilterChange} />
                <Rating filterValues={filterValues.rating} handleFilterChange={handleFilterChange} />

            </section>
        </>
    )
}



export default Sidebar;