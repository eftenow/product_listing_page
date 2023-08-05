import { FiHeart } from 'react-icons/fi'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';


import './Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <input className="search" type="text" placeholder="Search" />
        <div className="icons">
          <div className='icon-container'><FaShoppingCart className="icon" /></div>
          <div className='icon-container'><FaUser className="icon" /></div>
        </div>
      </header>

    </>

  )
}


export default Header;