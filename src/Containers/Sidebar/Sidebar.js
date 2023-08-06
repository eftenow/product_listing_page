import Gender from './Gender/Gender';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css'



const Sidebar = () => {
    const [filterValues, setFilterValues] = React.useState({
        gender: [],
        price: [],
        colors: [],
    });

    const handleFilterChange = (filterName, value) => {
        setFilterValues(prevState => {
            const updatedFilter = prevState[filterName];
            const valueIndex = updatedFilter.indexOf(value);
            if (valueIndex !== -1) {
                updatedFilter.splice(valueIndex, 1);
            } else {
                updatedFilter.push(value);
            }
            return { ...prevState, [filterName]: updatedFilter };
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