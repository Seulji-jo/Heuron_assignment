import { useMemo, useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { useParams } from 'react-router-dom';
import CanvasImage from '../../components/ImageGallery/CanvasImage';
import ImgColorSwitch from '../../components/ImageGallery/ImgColorSwitch';
import { ImgColorContext } from '../../contexts/ImgColorContext';
import useImageList from '../../hooks/useImageList';

import useResize from '../../hooks/useReSize';
import { ImageItem } from '../../types/ImageGallery';

export default function ImageDetail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const params = useParams().imgId;
  const [isColorImg, setIsColorImg] = useState(true);
  const { dimensions } = useResize(containerRef);
  console.log(dimensions);

  const { data: imgList } = useImageList();
  const imgSrc = useMemo(() => {
    return (
      imgList?.find((img: ImageItem) => img.id === params)?.download_url ?? ''
    );
  }, [imgList, params]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '90vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ImgColorContext value={{ isColorImg, setIsColorImg }}>
        <ImgColorSwitch />
        <Stage
          width={dimensions.width}
          height={dimensions.height}
          style={{ backgroundColor: '#f0f0f0' }}
        >
          <Layer>
            <CanvasImage
              imgSrc={imgSrc}
              canvasWidth={dimensions.width}
              canvasHeight={dimensions.height}
            />
          </Layer>
        </Stage>
      </ImgColorContext>
    </div>
  );
}
