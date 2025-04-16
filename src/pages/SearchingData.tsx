import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchingData/SearchForm';
import dummyData from '../data/dummyData.json';
import useForm from '../hooks/useForm';
import { Product, Values } from '../types/SearchingData';

export default function SearchingData() {
  const [products, setProducts] = useState<Product[]>(dummyData);
  const { values, onChange } = useForm<Values>({
    name: '',
    category: '',
    createdAt: '',
  });
  useEffect(() => {
    console.log(products);
    const filteredProducts = dummyData.reduce((acc: Product[], curr) => {
      const isName = curr.name.includes(values.name);
      const isCategory = curr.category.includes(values.category);
      const isCreatedAt = curr.createdAt.includes(values.createdAt);
      if (isName && isCategory && isCreatedAt) acc = [...acc, curr];
      return acc;
    }, []);
    console.log(filteredProducts);
    setProducts(filteredProducts);
  }, [values]);
  return (
    <div>
      <SearchForm values={values} onChange={onChange} />
      {products.map(prod => {
        return (
          <div key={prod.id} className="row">
            <div className="col-4">{prod.name}</div>
            <div className="col-4">{prod.category}</div>
            <div className="col-4">{prod.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}
