import { IProduct } from '../../interfaces/product';

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => {
  return <div>{product.price}</div>;
};

export default Product;
