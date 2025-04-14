import { useState } from 'react';
import { fetchImgList } from '../services';
import { useQuery } from '@tanstack/react-query';
import { ImgColorContext } from '../contexts/ImgColorContext';
import ImgTable from '../components/ImageGallery/ImgTable';

export default function ImageGallery() {
  const [isColorImg, setIsColorImg] = useState(true);
  const imgColor = isColorImg ? 'color' : 'gray';
  const { isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: fetchImgList,
  });

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
          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <ImgTable />
          )}
        </div>
      </div>
    </ImgColorContext>
  );
}
