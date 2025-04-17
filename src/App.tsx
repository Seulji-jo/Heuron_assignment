import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ImgColorContext } from './contexts/ImgColorContext';
import Router from './routes';

const queryClient = new QueryClient();

function App() {
  const [isColorImg, setIsColorImg] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ImgColorContext value={{ isColorImg, setIsColorImg }}>
        <Router />
      </ImgColorContext>
    </QueryClientProvider>
  );
}

export default App;
