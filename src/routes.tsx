import { createBrowserRouter } from 'react-router';
import Layout from './layout';
import ImageGallery from './pages/ImageGallery';
import CardGame from './pages/CardGame';
import SearchingData from './pages/SearchingData';
import { RouterProvider } from 'react-router-dom';

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
