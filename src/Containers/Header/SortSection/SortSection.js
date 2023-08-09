import './SortSection.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const SortSection = ({ onCategoryChange, selectedCategory, onSortOptionChange }) => {
    const categories = ['Sneakers', 'Flats', 'Skate', 'Heels'];
    
    return (
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
    )
}




export default SortSection;