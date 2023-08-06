const Input = ({ value, title, name, checked, onChange }) => {
    return (
        <label className="sidebar-label-container">
            <input type="checkbox" checked={checked} onChange={onChange} value={value} name={name} />
            <span className="checkmark">{title}</span>
        </label>
    )
}

export default Input;