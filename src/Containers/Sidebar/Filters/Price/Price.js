import Input from '../../../../Components/Input/Input';
import '../Filters.css';


const Price = ({ filterValues, handleFilterChange }) => {
  return (
    <div className='price-filter-container'>
      <h2 className="sidebar-title price-title">Price</h2>
      <div className='filter-items-wrapper'>
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