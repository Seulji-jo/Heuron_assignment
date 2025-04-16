import { useEffect, useState } from 'react';

export default function useElementSize(
  elRef: React.RefObject<HTMLElement | null>
) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (elRef?.current) {
        const { clientWidth, clientHeight } = elRef.current;
        console.log(clientWidth, clientHeight);
        setDimensions({ width: clientWidth, height: clientHeight });
      } else {
        // fallback: 브라우저 창 기준
        setDimensions({
          width: window.innerWidth * 0.8,
          height: window.innerHeight * 0.8,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return { dimensions };
}
