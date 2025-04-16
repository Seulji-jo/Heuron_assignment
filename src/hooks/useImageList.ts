import { useQuery } from '@tanstack/react-query';
import { fetchImgList } from '../services';

export default function useImageList() {
  return useQuery({
    queryKey: ['images'],
    queryFn: fetchImgList,
  });
}
