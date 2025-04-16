import { useEffect, useRef, useState } from 'react';
import { Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { useImageColor } from './hooks/useImageColor';

export default function CanvasImage({ imgSrc }: { imgSrc: string }) {
  const imageRef = useRef<Konva.Image | null>(null);
  const [image] = useImage(imgSrc, 'anonymous');
  const { isColorImg = true } = useImageColor();
  const [isMoving, setIsMoving] = useState(false);
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 500, h: 333 });
  const mouseDownHandler = (e: Konva.KonvaEventObject<MouseEvent>) => {
    console.log(e.evt);
    setIsMoving(true);
    setScreen({ x: e.evt.clientX, y: e.evt.clientY });
  };

  const mouseMoveHandler = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (isMoving) {
      console.log('mouseMoveHandler', e.evt);
      const x = e.evt.clientX - screen.x;
      const y = e.evt.clientY - screen.y;
      setImgSize(prev => {
        return { w: prev.w + x, h: prev.h + y };
      });
      setScreen({ x: e.evt.clientX, y: e.evt.clientY });
    }
  };

  const stopMouseMove = () => {
    setIsMoving(false);
  };

  useEffect(() => {
    if (image) {
      imageRef.current?.cache();
    }
  }, [image]);
  useEffect(() => {
    if (imageRef.current) {
      // 강제로 리렌더링
      imageRef.current.getLayer()?.batchDraw();
    }
  }, [imgSize]);

  return image ? (
    <Image
      ref={imageRef}
      image={image}
      width={imgSize.w}
      height={imgSize.h}
      filters={isColorImg ? [] : [Konva.Filters.Grayscale]}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={stopMouseMove}
      onMouseLeave={stopMouseMove}
      onClick={() => console.log('hi')}
    />
  ) : null;
}
