import './Price.css'
import Input from '../../../Components/Input/Input';

const Price = ({ filterValues, handleFilterChange }) => {
  return(
   <>
   <div className="ml">
     <h2 className="sidebar-title price-title">Price</h2>

     <Input
       value={50}
       title="$0 - 50"
       name="price"
       checked={filterValues.includes(50)}
       onChange={() => handleFilterChange('price', 50)}
     />

     <Input
       value={100}
       title="$50 - $100"
       name="price"
       checked={filterValues.includes(100)}
       onChange={() => handleFilterChange('price', 100)}
     />

     <Input
       value={150}
       title="$100 - $150"
       name="price"
       checked={filterValues.includes(150)}
       onChange={() => handleFilterChange('price', 150)}
     />

     <Input
       value={200}
       title="Over $150"
       name="price"
       checked={filterValues.includes(200)}
       onChange={() => handleFilterChange('price', 200)}
     />
   </div>
 </>
  )
}



export default Price;