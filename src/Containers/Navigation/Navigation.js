import { FiHeart } from 'react-icons/fi'
import { FaShoppingCart, FaUser } from 'react-icons/fa';


import './Navigation.css'

const Navigation = () => {
   return (
      <nav className='nav-wrapper'>
         <div className='nav-container'>
            <input type='text' class className='search-input' placeholder ='Search' />  
         </div>

         <div className='profile-container'>
            <a href='#'> <FiHeart className='nav-icons'/> </a>
            <a href='#'> <FaShoppingCart className='nav-icons'/> </a>
            <a href='#'> <FaUser className='nav-icons'/> </a>
         </div>
      </nav>

   )
}


export default Navigation;