export type ImageItem = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type ImgColorContextType = {
  isColorImg: boolean;
  setIsColorImg: React.Dispatch<React.SetStateAction<boolean>>;
};
