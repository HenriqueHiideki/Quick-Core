import "./formfield-style.css";

export function FormField({ label, ...rest }) {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      <input className="form-input" {...rest} />
    </div>
  );
}