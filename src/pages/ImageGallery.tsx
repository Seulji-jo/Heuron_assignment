import { useEffect } from 'react';
import axiosClient from '../services';

export default function ImageGallery() {
  async function fetchImgList() {
    console.log(await axiosClient.get(''));
    return await axiosClient.get('');
  }
  useEffect(() => {
    fetchImgList();
  });
  return <div>과제1</div>;
}
