import './SortSection.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';
import CategoryDropdown from '../../../Components/CategoryDropdown/CategoryDropdown';
import { BsFilterLeft } from 'react-icons/bs';


const SortSection = ({ onCategoryChange, selectedCategory, onSortOptionChange, toggleSidebar, sortOption }) => {
    return (
        <>
            <section className="sort-section">
                <CategoryDropdown onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
                <SortDropdown onSortOptionChange={onSortOptionChange} selectedSortOption={sortOption} />
            </section>

            <button className="filter-btn" onClick={toggleSidebar}>
                <BsFilterLeft />
            </button>
        </>
    )
}




export default SortSection;