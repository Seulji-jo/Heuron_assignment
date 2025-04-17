import { Values } from '../../types/SearchingData';
import Input from '../Input';

type SearchFormProps = {
  values: Values;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchForm({ values, onChange }: SearchFormProps) {
  return (
    <div className="row">
      <Input
        label="Product Name"
        name="name"
        className="col"
        value={values.name}
        onChange={onChange}
        placeholder="Coffee Mug"
      />
      <Input
        label="Category"
        name="category"
        className="col"
        value={values.category}
        onChange={onChange}
        placeholder="Kitchen"
      />
      <Input
        label="Created Date"
        name="createdAt"
        className="col"
        value={values.createdAt}
        onChange={onChange}
        placeholder="2025-01-10"
      />
    </div>
  );
}
