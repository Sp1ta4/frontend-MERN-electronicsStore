import Button from '@mui/material/Button';
import { IProduct } from '../../interfaces/product';
import styles from './Product.module.sass';
interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className={`${styles.productCard} d-flex flex-column p-4 border rounded position-relative`}>
      <div className='d-flex w-100 justify-content-center'>
        <img src={`images/phones/${product.images[0]}`} className='mt-4' width='180' alt={product.title} />
      </div>
      <span className='mt-4'>{product.title}</span>
      <span className='mt-4'>
        <b>{product.price}₽</b>
      </span>
      <Button
        fullWidth
        variant='contained'
        size='large'
        className='position-absolute  bottom-0 start-50 translate-middle-x mb-2'
      >
        В корзину
      </Button>
    </div>
  );
};

export default Product;
