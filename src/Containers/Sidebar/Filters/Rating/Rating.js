import Input from "../../../../Components/Input/Input";
import '../Filters.css';
import useExpandable from '../../../../hooks/Expand';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { AiTwotoneStar } from "react-icons/ai";

const Rating = ({ filterValues, handleFilterChange }) => {
  const { isOpen, toggleOpen } = useExpandable();
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className='rating-filter-container'>
      <h2 className="sidebar-title" onClick={toggleOpen}>Rating
      <div className='selected-category-arrow'>{isOpen ? <BiSolidDownArrow/> : <BiSolidRightArrow/> }</div></h2>

      <div className={`filter-items-wrapper ${isOpen ? 'open' : 'closed'}`}>
        {ratings.map((rating) => (
          <Input
            key={rating}
            value={rating}
            title={<>Above {rating} <AiTwotoneStar className='rating-star' /></>}
            name="rating"
            filterValues={filterValues}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  )
}


export default Rating;