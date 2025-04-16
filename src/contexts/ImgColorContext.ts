import { createContext } from 'react';
import { ImgColorContextType } from '../types/ImageGallery';

export const ImgColorContext = createContext<ImgColorContextType | null>(null);
