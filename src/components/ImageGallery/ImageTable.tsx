import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ImageItem } from '../../types/ImageGallery';

type ImageTableProps = {
  imgList: ImageItem[];
};

export default function ImageTable({ imgList }: ImageTableProps) {
  const chunkedData = useMemo(() => {
    console.log(imgList);

    if (!imgList) return [];
    const chunkSize = 5; // 원하는 크기
    const result = [];

    for (let i = 0; i < imgList.length; i += chunkSize) {
      result.push(imgList.slice(i, i + chunkSize));
    }

    console.log(result);
    return result;
  }, [imgList]);

  return (
    <table className="table table-bordered align-middle">
      <thead></thead>
      <tbody>
        {chunkedData?.map((datas, rowIdx) => (
          <tr key={rowIdx}>
            {datas.map((item, i) => (
              <td key={`${rowIdx}-${i}`}>
                <Link to={`detail/${item.id}`}>
                  <img
                    src={item.download_url}
                    alt={`${item.author} picture`}
                    width={'100%'}
                  />
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
