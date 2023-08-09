import './SortSection.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';
import { BsFilterLeft } from 'react-icons/bs';


const SortSection = ({ onCategoryChange, selectedCategory, onSortOptionChange, toggleSidebar }) => {
    const categories = ['Sneakers', 'Flats', 'Skate', 'Heels'];

    return (
        <>
            <section className="sort-section">
                <ul>
                    {categories.map(category => (
                        <li
                            key={category}
                            className={`nav-item ${selectedCategory === category ? 'selected-category' : ''}`}
                            onClick={() => onCategoryChange(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <SortDropdown onSortOptionChange={onSortOptionChange} />
            </section>

            <button className="filter-btn" onClick={toggleSidebar}>
                <BsFilterLeft />
            </button>
        </>
    )
}




export default SortSection;