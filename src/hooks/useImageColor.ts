import { useContext } from 'react';
import { ImgColorContext } from '../contexts/ImgColorContext';

export const useImageColor = () => {
  const context = useContext(ImgColorContext);
  if (!context) {
    throw new Error('이미지 색상값이 없습니다.');
  }
  return context;
};
