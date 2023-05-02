import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButton';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './Productimage';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButton';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './Productimage';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
