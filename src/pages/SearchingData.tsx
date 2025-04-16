import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchingData/SearchForm';
import dummyData from '../data/dummyData.json';

export default function SearchingData() {
  const [products] = useState(dummyData);
  console.log(products);
  return (
    <div>
      <SearchForm />
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
