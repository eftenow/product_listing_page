import Input from "../../../../Components/Input/Input";
import '../Filters.css';
import useExpandable from '../../../../hooks/Expand';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';

const Use = ({ filterValues, handleFilterChange }) => {
  const uses = ['sport', 'formal', 'casual'];
  const { isOpen, toggleOpen } = useExpandable();


  return (
    <div className='use-filter-container'>
      <h2 className="sidebar-title" onClick={toggleOpen}>Occasion
      <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>

      <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
        {uses.map((use) => (
          <Input
            key={use}
            value={use}
            title={use.charAt(0).toUpperCase() + use.slice(1)}
            name="use"
            filterValues={filterValues}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  )
}


export default Use;