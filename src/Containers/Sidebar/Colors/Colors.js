import './Colors.css'
import Input from '../../../Components/Input/Input';

const Colors = () => {
     return(
      <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="colors" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          value="black"
          title="Black"
          name="colors"
          color="black"
        />

        <Input
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />

        <Input
          value="red"
          title="Red"
          name="colors"
          color="red"
        />

        <Input
          value="green"
          title="Green"
          name="colors"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            type="radio"
            value="white"
            name="colors"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
     )
}


export default Colors;