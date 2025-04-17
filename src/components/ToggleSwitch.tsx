type ToggleSwitchProps = {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

export default function ToggleSwitch({
  id,
  label,
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
        id={id}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label && (
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
