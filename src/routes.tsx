import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Layout from './layout';
import CardGame from './pages/CardGame';
import ImageGallery from './pages/ImageGallery';
import ImageDetail from './pages/ImageGallery/ImageDetail';
import SearchingData from './pages/SearchingData';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, element: <Navigate to="/assign1" replace /> },
      {
        path: 'assign1',
        children: [
          {
            index: true,
            Component: ImageGallery,
          },
          {
            path: 'detail/:imgId',
            Component: ImageDetail,
          },
        ],
      },
      { path: 'assign2', Component: CardGame },
      { path: 'assign3', Component: SearchingData },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
