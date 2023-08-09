import './Navigation.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const Navigation = ({ onCategoryChange, selectedCategory, onSortOptionChange }) => {
    const categories = ['Sneakers', 'Flats', 'Skate', 'Heels'];
    
    return (
        <nav className="sub-nav">
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
        </nav>
    )
}




export default Navigation;