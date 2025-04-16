import { ChangeEvent, useState } from 'react';

export default function useForm<T extends Record<string, unknown>>(
  defaultVal: T
) {
  const [values, setValues] = useState<T>(defaultVal);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return {
    values,
    onChange,
  };
}
