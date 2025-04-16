import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import { useParams } from 'react-router-dom';
import Konva from 'konva';
import useImage from 'use-image';
import { ImgColorContext } from '../../contexts/ImgColorContext';
import useImageList from '../../hooks/useImageList';
import { ImageItem } from '../../types/ImageGallery';

export default function Canvas() {
  const params = useParams().imgId;
  const { data: imgList } = useImageList();
  const imgSrc = useMemo(() => {
    return (
      imgList?.find((img: ImageItem) => img.id === params)?.download_url ?? ''
    );
  }, [imgList, params]);
  const isColorImg = useContext(ImgColorContext);
  const imageRef = useRef<Konva.Image | null>(null);
  const [image] = useImage(imgSrc, 'anonymous');
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
    console.log(isColorImg);
  }, [isColorImg]);
  useEffect(() => {
    if (image) {
      imageRef.current?.cache();
    }
  }, [image]);

  useEffect(() => {
    console.log(imgSize);
  }, [imgSize]);

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
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
            onClick={() => console.log('hi')}
          />
        </Layer>
      </Stage>
    </div>
  );
}
