import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import { ImageItem } from '../../types/ImageGallery';
import Canvas from './Canvas';

type TableDataCellProps = {
  item: ImageItem;
};

export default function TableDataCell({ item }: TableDataCellProps) {
  return (
    <td className="d-flex justify-content-center">
      <Canvas imgSrc={item.download_url} />
    </td>
  );
}
