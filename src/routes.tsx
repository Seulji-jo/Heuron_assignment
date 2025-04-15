import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Layout from './layout';
import CardGame from './pages/CardGame';
import ImageGallery from './pages/ImageGallery';
import SearchingData from './pages/SearchingData';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: ImageGallery },
      { path: 'assign1', Component: ImageGallery },
      { path: 'assign2', Component: CardGame },
      { path: 'assign3', Component: SearchingData },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
