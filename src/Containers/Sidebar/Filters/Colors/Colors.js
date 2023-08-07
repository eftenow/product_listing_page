import Input from '../../../../Components/Input/Input';
import '../Filters.css';

const Colors = ({ filterValues, handleFilterChange }) => {
  return (
    <div className='colors-filter-container'>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div className='filter-items-wrapper'>
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