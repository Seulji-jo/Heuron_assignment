import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://picsum.photos/v2/list',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function fetchImgList() {
  const { data } = await axiosClient.get('');
  return data;
}

export { fetchImgList };
