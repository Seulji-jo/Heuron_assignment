import { useState } from 'react';
import ImgTable from '../components/ImageGallery/ImgTable';
import QueryStateHandler from '../components/QueryStateHandler';
import { ImgColorContext } from '../contexts/ImgColorContext';
import useImageList from '../hooks/useImageList';

export default function ImageGallery() {
  const [isColorImg, setIsColorImg] = useState(true);
  const imgColor = isColorImg ? 'color' : 'gray';

  const { isLoading, isError, error, data } = useImageList();

  return (
    <ImgColorContext value={isColorImg}>
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
          <QueryStateHandler
            isLoading={isLoading}
            isError={isError}
            error={error}
          >
            <ImgTable imgList={data} />
          </QueryStateHandler>
        </div>
      </div>
    </ImgColorContext>
  );
}
