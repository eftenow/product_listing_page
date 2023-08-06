import './Colors.css'
import Input from '../../../Components/Input/Input';

const Colors = ({ filterValues, handleFilterChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

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
  )
}


export default Colors;