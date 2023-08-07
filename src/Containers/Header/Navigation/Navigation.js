import './Navigation.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const Navigation = ({ onCategoryChange }) => {
    return (
        <nav className="sub-nav">
            <ul>
                <li className="nav-item" onClick={() => onCategoryChange('Sneakers')}>Sneakers</li>
                <li className="nav-item" onClick={() => onCategoryChange('Flats')}>Flats</li>
                <li className="nav-item" onClick={() => onCategoryChange('Sandals')}>Sandals</li>
                <li className="nav-item" onClick={() => onCategoryChange('Heels')}>Heels</li>
            </ul>
            <SortDropdown />
        </nav>
    )
}



export default Navigation;