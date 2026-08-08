import "./checkboxoption-style.css";

export function CheckboxOption({ children, ...rest }) {
  return (
    <label className="checkbox-option">
      <input type="checkbox" {...rest} />
      <span>{children}</span>
    </label>
  );
}