import Input from '../../../Components/Input/Input';
import './Category.css'

const Category = () => {
     return(
      <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        <Input
          value="sneakers"
          title="Sneakers"
          name="category"
        />

        <Input
          value="flats"
          title="Flats"
          name="category"
        />

        <Input
          value="sandals"
          title="Sandals"
          name="category"
        />

        <Input
          value="heels"
          title="Heels"
          name="category"
        />
      </div>
    </div>
     )
}


export default Category;