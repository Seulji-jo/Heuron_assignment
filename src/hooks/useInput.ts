import { ChangeEvent, useState } from 'react';

export default function useInput<T extends Record<string, unknown>>(
  defaultVal: T
) {
  const [values, setValues] = useState<T>(defaultVal);

  const resetValues = (initialVal: T) => {
    setValues(initialVal);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? +value : value;
    setValues(prev => ({ ...prev, [name]: val }));
  };

  return {
    values,
    onChange,
    resetValues,
  };
}
