import './Navigation.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const Navigation = () => {
    return (
        <nav className="sub-nav">
            <ul>
                <li className="nav-item">Bags</li>
                <li className="nav-item">Shoes</li>
                <li className="nav-item">T-Shirts</li>
            </ul>
            <SortDropdown />
        </nav>

    )
}


export default Navigation;