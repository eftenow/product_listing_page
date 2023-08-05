import { FiHeart } from 'react-icons/fi'
import { FaShoppingCart, FaUser } from 'react-icons/fa';


import './Navigation.css'
import SortDropdown from '../../Components/SortDropdown/SortDropdown';

const Navigation = () => {
   return (
      <>
      <header className="header">
        <div className="logo">Logo</div>
        <input className="search" type="text" placeholder="Search"/>
        <div className="icons">
          <div className='icon-container'><FaShoppingCart className="icon"/></div>
          <div className='icon-container'><FaUser className="icon"/></div>
        </div>
      </header>
      <nav className="sub-nav">
        <ul>
          <li className="nav-item">Bags</li>
          <li className="nav-item">Shoes</li>
          <li className="nav-item">T-Shirts</li>
        </ul>
        <SortDropdown />
      </nav>
    </>

   )
}


export default Navigation;