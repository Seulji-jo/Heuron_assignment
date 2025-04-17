import { useEffect, useState } from 'react';
import HightlightText from '../components/SearchingData/HighlightText';
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
    const filteredProducts = dummyData.reduce((acc: Product[], curr) => {
      const isName = curr.name.includes(values.name);
      const isCategory = curr.category.includes(values.category);
      const isCreatedAt = curr.createdAt.includes(values.createdAt);
      if (isName && isCategory && isCreatedAt) acc = [...acc, curr];
      return acc;
    }, []);

    setProducts(filteredProducts);
  }, [values]);
  return (
    <div>
      <SearchForm values={values} onChange={onChange} />
      {products.map(prod => {
        return (
          <div key={prod.id} className="row">
            <div className="col-4">
              {HightlightText(prod.name, values.name)}
            </div>
            <div className="col-4">
              {HightlightText(prod.category, values.category)}
            </div>
            <div className="col-4">
              {HightlightText(prod.createdAt, values.createdAt)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
