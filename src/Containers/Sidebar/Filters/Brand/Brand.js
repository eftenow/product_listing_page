import Input from "../../../../Components/Input/Input";
import '../Filters.css';

const Brand = ({ filterValues, handleFilterChange }) => {
  const brands = ['Nike', 'Adidas', 'Puma', 'Vans', 'Gucci', 'Prada', 'Ted Baker']; 

  return (
    <div className='brand-filter-container'>
      <h2 className="sidebar-title">Brand</h2>

      <div className='filter-items-wrapper'>
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