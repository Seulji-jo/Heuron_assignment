import useForm from '../../hooks/useForm';

export default function SearchForm() {
  const { name, category, createdAt } = useForm({
    name: '',
    category: '',
    createdAt: '',
  });
  return (
    <div className="row">
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Coffee Mug"
          {...name}
        />
        <label htmlFor="name">Product Name</label>
      </div>
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="Kitchen"
          {...category}
        />
        <label htmlFor="category">Category</label>
      </div>
      <div className="form-floating col-4">
        <input
          type="text"
          className="form-control"
          name="createdAt"
          placeholder="2025-01-10"
          {...createdAt}
        />
        <label htmlFor="createdAt">Created At</label>
      </div>
    </div>
  );
}
