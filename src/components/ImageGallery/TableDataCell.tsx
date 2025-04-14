import { ImageItem } from '../../types/ImageGallery';

type TableDataCellProps = {
  item: ImageItem;
};

export default function TableDataCell({ item }: TableDataCellProps) {
  return <td>{item.url}</td>;
}
