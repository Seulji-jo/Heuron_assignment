import ImgTable from '../../components/ImageGallery/ImageTable';
import QueryStateHandler from '../../components/QueryStateHandler';
import useImageList from '../../hooks/useImageList';

export default function ImageGallery() {
  const { isLoading, isError, error, data } = useImageList();

  return (
    <div>
      과제1
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
  );
}
