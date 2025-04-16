import { useMemo } from 'react';
import { ImageItem } from '../../types/ImageGallery';

type ImgTableProps = {
  data: ImageItem[];
};

export default function ImgTable({ data }: ImgTableProps) {
  const chunkedData = useMemo(() => {
    console.log(data);

    if (!data) return [];
    const chunkSize = 5; // 원하는 크기
    const result = [];

    for (let i = 0; i < data.length; i += chunkSize) {
      result.push(data.slice(i, i + chunkSize));
    }

    console.log(result);
    return result;
  }, [data]);

  return (
    <table className="table table-bordered align-middle">
      <thead></thead>
      <tbody>
        {chunkedData?.map((datas, rowIdx) => (
          <tr key={rowIdx}>
            {datas.map((item, i) => (
              <td key={`${rowIdx}-${i}`}>
                <img
                  src={item.download_url}
                  alt={`${item.author} picture`}
                  width={'100%'}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
