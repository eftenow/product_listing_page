const Input = ({ title, value, name, onChange, filterValues, color }) => {
    return (
        <label className="sidebar-label-container">
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={() => onChange(name, value)}
                checked={filterValues === value}
            />
            <span className="checkmark" style={{ backgroundColor: color }}></span>
            {title}
        </label>
    );
};



export default Input;