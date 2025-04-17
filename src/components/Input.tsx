type InputProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  min?: number;
  max?: number;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = 'col-4',
  min,
  max,
}: InputProps) {
  return (
    <div className={`form-floating ${className}`}>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        min={min}
        max={max}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
