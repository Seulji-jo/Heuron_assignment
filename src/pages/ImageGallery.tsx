import { useEffect, useState } from 'react';
import { fetchImgList } from '../services';
import { useQuery } from '@tanstack/react-query';
import { ImgColorContext } from '../contexts/ImgColorContext';

export default function ImageGallery() {
  const [isColorImg, setIsColorImg] = useState(true);
  const imgColor = isColorImg ? 'color' : 'gray';
  const { isLoading, data } = useQuery({
    queryKey: ['images'],
    queryFn: fetchImgList,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ImgColorContext value={imgColor}>
      <div>
        과제1
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switch"
            checked={isColorImg}
            onChange={() => setIsColorImg(!isColorImg)}
          />
          <label className="form-check-label" htmlFor="switch">
            {imgColor}
          </label>
        </div>
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
    </ImgColorContext>
  );
}
