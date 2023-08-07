import Input from "../../../../Components/Input/Input";
import '../Filters.css';

const Rating = ({ filterValues, handleFilterChange }) => {
    const ratings = [1, 2, 3, 4, 5];
  
    return (
      <div className='rating-filter-container'>
        <h2 className="sidebar-title">Rating</h2>
  
        <div className='filter-items-wrapper'>
          {ratings.map((rating) => (
            <Input
              key={rating}
              value={rating}
              title={`Above ${rating}`}
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