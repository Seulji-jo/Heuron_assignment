import { useMemo } from 'react';

export default function useChunkedData<T>(
  dataList: T[] | undefined,
  size: number = 1
) {
  const chunked = useMemo(() => {
    if (!dataList) return [];
    if (!size) return [];

    const chunks: T[][] = [];

    for (let i = 0; i < dataList.length; i += +size) {
      chunks.push(dataList.slice(i, i + +size));
    }

    return chunks;
  }, [dataList, size]);

  return chunked;
}
