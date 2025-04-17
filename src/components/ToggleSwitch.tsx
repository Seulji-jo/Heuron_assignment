type ToggleSwitchProps = {
  label?: string;
  name: string;
  checked: boolean;
  onChange: (e: React.SetStateAction<boolean>) => void;
  className?: string;
};

export default function ToggleSwitch({
  label,
  name,
  checked,
  onChange,
  className = '',
}: ToggleSwitchProps) {
  return (
    <div className={`form-check form-switch ${className}`}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        name={name}
        id={name}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label && (
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
