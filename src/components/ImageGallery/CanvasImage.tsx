import { useEffect, useRef } from 'react';
import { Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { useImageColor } from '../../hooks/useImageColor';
import useImageDrag from '../../hooks/useImageDrag';

type CanvasImageProps = {
  imgSrc: string;
  canvasWidth: number;
  canvasHeight: number;
};

export default function CanvasImage({
  imgSrc,
  canvasWidth,
  canvasHeight,
}: CanvasImageProps) {
  const imageRef = useRef<Konva.Image>(null);
  const [image] = useImage(imgSrc, 'anonymous');
  const { isColorImg = true } = useImageColor();
  const { imgSize, rotation, handleMouseDown, handleMouseMove, handleMouseUp } =
    useImageDrag(imageRef, { w: 500, h: 333 });
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.clearCache();
      imageRef.current.cache();
    }
  }, [imgSize, isColorImg]);

  return image ? (
    <Image
      ref={imageRef}
      image={image}
      width={imgSize.w}
      height={imgSize.h}
      x={canvasWidth / 2}
      y={canvasHeight / 2}
      rotation={rotation}
      offsetX={imgSize.w / 2}
      offsetY={imgSize.h / 2}
      filters={isColorImg ? [] : [Konva.Filters.Grayscale]}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={e => e.evt.preventDefault()}
    />
  ) : null;
}
