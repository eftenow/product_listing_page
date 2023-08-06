import Input from '../../../Components/Input/Input';
import './Price.css'


const Price = ({ filterValues, handleFilterChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

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
  )
}


export default Price;