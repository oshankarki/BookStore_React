function Input({ label, type, placeholder, handler, name, id, value, error, options }) {
    return (
        <div className="mb-3">
            <label htmlFor={id}>{label}</label>
            {
                <select
                name={name}
                className="form-control"
                id={id}
                onChange={handler}
                value={value}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
                
            }
            {error && <div id={id + "help"} className="form-text text-danger">*{error}</div>}
        </div>
    );
}

export default Input;
