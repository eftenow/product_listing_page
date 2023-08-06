import Input from '../../../Components/Input/Input';
import './Gender.css'

const Gender = ({ filterValues, handleFilterChange }) => {
  return (
   <div>
     <h2 className="sidebar-title">Gender</h2>

     <div>
       <Input
         value="men"
         title="Men"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

       <Input
         value="women"
         title="Women"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

       <Input
         value="all"
         title="All"
         name="gender"
         filterValues={filterValues}
         onChange={handleFilterChange}
       />

     </div>
   </div>
  )
}



export default Gender;