import { useState } from 'react';
import Konva from 'konva';

export default function useImageDrag(
  imageRef: React.RefObject<Konva.Image | null>,
  initialImgSize: { w: number; h: number } = { w: 0, h: 0 },
  initialRotation: number | undefined = 0
) {
  const [imgSize, setImgSize] = useState(initialImgSize);
  const [rotation, setRotation] = useState(initialRotation);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsDragging(true);
    setDragStart({ x: e.evt.clientX, y: e.evt.clientY });
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDragging) return;

    const dx = e.evt.clientX - dragStart.x;
    const dy = e.evt.clientY - dragStart.y;

    if (e.evt.buttons === 2) {
      // 우클릭 (회전)
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const newRotation = rotation + angle * 0.03;

      setRotation(newRotation);
    } else {
      // 우클릭 (리사이징)
      const canvasData = imageRef.current?.getLayer()?.canvas;
      const MAX_WIDTH = canvasData?.width || 1000;
      const MAX_HEIGHT = canvasData?.width || 1000;
      const MIN_SIZE = 50;

      setImgSize(prev => ({
        w: Math.max(MIN_SIZE, Math.min(MAX_WIDTH, prev.w + dx)),
        h: Math.max(MIN_SIZE, Math.min(MAX_HEIGHT, prev.h + dy)),
      }));
    }

    setDragStart({ x: e.evt.clientX, y: e.evt.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return {
    imgSize,
    setImgSize,
    rotation,
    setRotation,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}
