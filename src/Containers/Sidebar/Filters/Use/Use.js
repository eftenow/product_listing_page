import Input from "../../../../Components/Input/Input";
import '../Filters.css';

const Use = ({ filterValues, handleFilterChange }) => {
    const uses = ['sport', 'formal', 'casual']; 
  
    return (
      <div className='use-filter-container'>
        <h2 className="sidebar-title">Occasion</h2>
  
        <div className='filter-items-wrapper'>
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