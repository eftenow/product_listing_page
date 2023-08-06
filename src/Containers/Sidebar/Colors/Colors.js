import './Colors.css'
import Input from '../../../Components/Input/Input';

const Colors = ({ filterValues, handleFilterChange }) => {
  return(
   <>
   <div>
     <h2 className="sidebar-title color-title">Colors</h2>

     <Input
       value="black"
       title="Black"
       name="colors"
       color="black"
       checked={filterValues.includes('black')}
       onChange={() => handleFilterChange('colors', 'black')}
     />

     <Input
       value="blue"
       title="Blue"
       name="colors"
       color="blue"
       checked={filterValues.includes('blue')}
       onChange={() => handleFilterChange('colors', 'blue')}
     />

     <Input
       value="red"
       title="Red"
       name="colors"
       color="red"
       checked={filterValues.includes('red')}
       onChange={() => handleFilterChange('colors', 'red')}
     />

     <Input
       value="green"
       title="Green"
       name="colors"
       color="green"
       checked={filterValues.includes('green')}
       onChange={() => handleFilterChange('colors', 'green')}
     />
   </div>
 </>
  )
}


export default Colors;