import { useEffect } from 'react';
import { fetchImgList } from '../services';
import { useQuery } from '@tanstack/react-query';

export default function ImageGallery() {
  const { isLoading, data } = useQuery({
    queryKey: ['images'],
    queryFn: fetchImgList,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      과제1
      <div className="table-responsive">
        <table className="table align-middle">
          <thead></thead>
          <tbody>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
