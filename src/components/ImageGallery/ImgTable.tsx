import { useEffect } from 'react';
import { ImageItem } from '../../types/ImageGallery';
import TableDataCell from './TableDataCell';

type ImgTableProps = {
  data: ImageItem[];
};

export default function ImgTable({ data }: ImgTableProps) {
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
