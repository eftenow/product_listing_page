import Input from '../../../../Components/Input/Input';
import useExpandable from '../../../../hooks/Expand';
import '../Filters.css';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';

const Colors = ({ filterValues, handleFilterChange }) => {
  const { isOpen, toggleOpen } = useExpandable();

  return (
    <div className='colors-filter-container'>
      <h2 className="sidebar-title color-title" onClick={toggleOpen}>Colors
      <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>
      <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <Input
          value="black"
          title="Black"
          name="colors"
          color="black"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value="red"
          title="Red"
          name="colors"
          color="red"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />

        <Input
          value="green"
          title="Green"
          name="colors"
          color="green"
          filterValues={filterValues}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  )
}


export default Colors;