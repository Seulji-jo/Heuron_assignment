import { MouseEvent, useEffect, useRef, useState } from 'react';
import { ImageItem } from '../../types/ImageGallery';

type TableDataCellProps = {
  item: ImageItem;
};

export default function TableDataCell({ item }: TableDataCellProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imgSize, setImgSize] = useState({ w: 500, h: 333 });

  const dragMouse = (click: MouseEvent) => {
    click.stopPropagation();

    const mouseMoveHandler = (move: globalThis.MouseEvent) => {
      const x = move.screenX - click.screenX;
      const y = move.screenY - click.screenY;
      setImgSize(prev => {
        return { w: prev.w + x, h: prev.h + y };
      });
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const image = new Image();
    image.src = item.download_url;
    image.onload = () => {
      context.drawImage(image, 0, 0, imgSize.w, imgSize.h);
    };
  }, [item]);

  return (
    <td className="d-flex justify-content-center">
      <canvas
        ref={canvasRef}
        style={{ width: imgSize.w, height: imgSize.h }}
        onMouseDown={dragMouse}
        width={500}
        height={333}
      />
    </td>
  );
}
