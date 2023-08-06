import Input from '../../../Components/Input/Input';
import './Gender.css'

const Gender = ({ filterValues, handleFilterChange }) => {
  return(
   <div>
   <h2 className="sidebar-title">Gender</h2>

   <div>
     <Input
       value="men"
       title="Men"
       name="gender"
       checked={filterValues.includes('men')}
       onChange={() => handleFilterChange('gender', 'men')}
     />

     <Input
       value="women"
       title="Women"
       name="gender"
       checked={filterValues.includes('women')}
       onChange={() => handleFilterChange('gender', 'women')}
     />

     <Input
       value="all"
       title="All"
       name="gender"
       checked={filterValues.includes('all')}
       onChange={() => handleFilterChange('gender', 'all')}
     />

   </div>
 </div>
  )
}



export default Gender;