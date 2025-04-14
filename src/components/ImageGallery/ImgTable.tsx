import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import TableDataCell from './TableDataCell';

export default function ImgTable() {
  const cache = useQueryClient();
  const data = cache.getQueryData<any[]>(['images']);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <table className="table align-middle">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, idx) => (
          <tr key={idx}>
            <TableDataCell item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
