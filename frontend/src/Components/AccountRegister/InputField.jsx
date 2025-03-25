const InputField = ({ label, name, desc, type, placeholder }) => {
    return (
        <div className="input-field">
            <label htmlFor="username">{label}</label>
            <p>{desc}</p>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    );
}

export default InputField;