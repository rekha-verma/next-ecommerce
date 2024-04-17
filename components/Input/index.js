import "./input.css";

export default function Input({ type, name, id, className, onChange, placeholder }) {
    return (
        <div className="input-box">
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>

    );
}
