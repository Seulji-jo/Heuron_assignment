import { useEffect, useRef } from 'react';
import { ImageItem } from '../../types/ImageGallery';

type TableDataCellProps = {
  item: ImageItem;
};

export default function TableDataCell({ item }: TableDataCellProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const image = new Image();
    image.src = item.download_url;
    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, [item]);

  return (
    <td className="d-flex justify-content-center">
      <canvas ref={canvasRef} width={500} height={333} />
    </td>
  );
}
