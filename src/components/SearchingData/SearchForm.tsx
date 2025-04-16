import { Values } from '../../types/SearchingData';

type SearchFormProps = {
  values: Values;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchForm({ values, onChange }: SearchFormProps) {
  return (
    <div className="row">
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Coffee Mug"
          value={values.name}
          onChange={onChange}
        />
        <label htmlFor="name">Product Name</label>
      </div>
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="Kitchen"
          value={values.category}
          onChange={onChange}
        />
        <label htmlFor="category">Category</label>
      </div>
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="createdAt"
          placeholder="2025-01-10"
          value={values.createdAt}
          onChange={onChange}
        />
        <label htmlFor="createdAt">Created At</label>
      </div>
    </div>
  );
}
