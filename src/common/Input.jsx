function Select({ label, type, placeholder, handler, name, id, value, error, options }) {
    return (
        <div className="mb-3">
            <label htmlFor={id}>{label}</label>
            {
                <input
                    name={name}
                    type={type}
                    className="form-control"
                    id={id}
                    placeholder={placeholder}
                    onChange={handler}
                    value={value}
                    options={options}
                />
                
            }
            {error && <div id={id + "help"} className="form-text text-danger">*{error}</div>}
        </div>
    );
}

export default Select;
