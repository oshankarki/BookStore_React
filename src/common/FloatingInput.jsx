function FloatingInput({ label, type, placeholder, handler, name, id, value, error }) {
    return (
        <div className="form-floating mb-3">
            <input 
                name={ name } 
                type={ type }
                className="form-control"
                id={ id }
                placeholder={ placeholder }
                onChange={ handler }
                value={ value }
            />
            <label htmlFor={id}>{label}</label>
            { error && <div id={id+"help"} className="form-text text-danger">*{error}</div> }
        </div>
    );
}

export default FloatingInput;