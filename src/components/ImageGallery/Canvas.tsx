import { useContext, useEffect, useRef, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { ImgColorContext } from '../../contexts/ImgColorContext';

export default function Canvas({ imgSrc }: { imgSrc: string }) {
  const isColorImg = useContext(ImgColorContext);
  const imageRef = useRef<Konva.Image | null>(null);
  const [image] = useImage(imgSrc, 'anonymous');
  const [isMoving, setIsMoving] = useState(false);
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 500, h: 333 });

  const mouseDownHandler = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setIsMoving(true);
    setScreen({ x: e.evt.clientX, y: e.evt.clientY });
  };
  const mouseMoveHandler = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (isMoving) {
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
    console.log(isColorImg);
  }, [isColorImg]);
  useEffect(() => {
    if (image) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current?.cache();
    }
  }, [image]);

  return (
    <Stage width={window.innerWidth * 0.8} height={333}>
      <Layer>
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
        />
      </Layer>
    </Stage>
  );
}
