import { useMemo, useRef } from 'react';
import { Layer, Stage } from 'react-konva';
import { useParams } from 'react-router-dom';
import CanvasImage from '../../components/ImageGallery/CanvasImage';
import ToggleSwitch from '../../components/ToggleSwitch';
import useElementSize from '../../hooks/useElementSize';
import { useImageColor } from '../../hooks/useImageColor';
import useImageList from '../../hooks/useImageList';

import { ImageItem } from '../../types/ImageGallery';

export default function ImagePG() {
  const containerRef = useRef<HTMLDivElement>(null);
  const params = useParams().imgId;
  const { isColorImg = true, setIsColorImg } = useImageColor();
  const { dimensions } = useElementSize(containerRef);
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
      <ToggleSwitch
        name="isColor"
        checked={isColorImg}
        onChange={setIsColorImg}
        label={isColorImg ? 'color' : 'gray'}
      />
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
    </div>
  );
}
