import Input from '../../../../Components/Input/Input';
import '../Filters.css';
import useExpandable from '../../../../hooks/Expand';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';


const Price = ({ filterValues, handleFilterChange }) => {
  const { isOpen, toggleOpen } = useExpandable();

  return (
    <div className='price-filter-container'>
      <h2 className="sidebar-title price-title" onClick={toggleOpen}>Price
      <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>
     <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <Input
          value={50}
          title="$0 - 50"
          name="price"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value={100}
          title="$50 - $100"
          name="price"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value={150}
          title="$100 - $150"
          name="price"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value={200}
          title="Over $150"
          name="price"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  )
}


export default Price;