const Input = ({ title, value, name, onChange, filterValues, color }) => {
    return (
        <label className="sidebar-label-container">
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={() => onChange(name, value)}
                checked={filterValues.active && filterValues.value === value}
            />
            <span id={color === 'white' ? 'white-checkbox' : ''} className="checkmark" style={{ backgroundColor: color }}></span>

            {title}
        </label>
    );
};



export default Input;