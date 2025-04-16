import { ChangeEvent, useState } from 'react';

type FormField = {
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

export default function useForm<T extends Record<string, string>>(
  defaultVal: T
): Record<keyof T, FormField> {
  const [values, setValues] = useState<T>(defaultVal);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const result = {} as Record<keyof T, FormField>;

  (Object.keys(defaultVal) as (keyof T)[]).forEach(key => {
    result[key] = {
      value: values[key],
      onChange,
    };
  });

  return result;
}
