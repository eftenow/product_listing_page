import './Navigation.css'
import SortDropdown from '../../../Components/SortDropdown/SortDropdown';

const Navigation = () => {
    return (
        <nav className="sub-nav">
            <ul>
                <li className="nav-item">Sneakers</li>
                <li className="nav-item">Flats</li>
                <li className="nav-item">Sandals</li>
                <li className="nav-item">Heels</li>
            </ul>
            <SortDropdown />
        </nav>

    )
}


export default Navigation;