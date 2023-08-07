import Input from '../../../../Components/Input/Input';
import '../Filters.css';
import useExpandable from '../../../../hooks/Expand';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';

const Gender = ({ filterValues, handleFilterChange }) => {
  const { isOpen, toggleOpen } = useExpandable();

  return (
   <div className='gender-filter-container'>
     <h2 className="sidebar-title" onClick={toggleOpen}>Gender
     <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>

     <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
       <Input
         value="men"
         title="Men"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

       <Input
         value="women"
         title="Women"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

       <Input
         value="all"
         title="All"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

     </div>
   </div>
  )
}



export default Gender;