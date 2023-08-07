import './Navigation.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const Navigation = ({ onCategoryChange, selectedCategory }) => {
    const categories = ['Sneakers', 'Flats', 'Sandals', 'Heels'];
    
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
            <SortDropdown />
        </nav>
    )
}



export default Navigation;