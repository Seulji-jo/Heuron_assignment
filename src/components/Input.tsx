type InputProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = 'col-4',
}: InputProps) {
  return (
    <div className={`form-floating ${className}`}>
      <input
        type={type}
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
