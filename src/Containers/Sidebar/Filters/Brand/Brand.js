import Input from "../../../../Components/Input/Input";
import '../Filters.css';
import useExpandable from '../../../../hooks/Expand';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';

const Brand = ({ filterValues, handleFilterChange }) => {
  const { isOpen, toggleOpen } = useExpandable();
  const brands = ['Nike', 'Adidas', 'Puma', 'Vans', 'Gucci', 'Prada', 'Ted Baker']; 


  return (
    <div className='brand-filter-container'>
      <h2 className="sidebar-title" onClick={toggleOpen}>Brand
      <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>

     <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
        {brands.map((brand) => (
          <Input
            key={brand}
            value={brand}
            title={brand}
            name="brand"
            filterValues={filterValues}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  )
}


  export default Brand;