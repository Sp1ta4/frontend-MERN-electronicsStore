import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { IProduct } from '../../interfaces/product';
import styles from './Product.module.sass';
import { useAppDispatch } from '../../store/hooks';
import { fetchAddToCart } from '../../store/Slices/CartSlice';

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId: string) => {
    setLoading(true);
    await dispatch(fetchAddToCart(productId));
    setLoading(false);
  };

  return (
    <div className={`${styles.productCard} d-flex flex-column justify-content-between`}>
      <div className={`${styles.productInfo} d-flex flex-column ps-4 pe-4 pb-2 border rounded`}>
        <div
          className={`${styles.img}`}
          style={{ backgroundImage: `url("images/phones/${product.images[0]}")` }}
        ></div>
        <span className='mt-4'>
          {product.title.length > 45 ? product.title.slice(0, 45) + '...' : product.title}
        </span>
        <span className='mt-4'>
          <b>{product.price} ₽</b>
        </span>
      </div>
      {loading ? (
        <LoadingButton loading fullWidth variant='outlined' size='large' className='mb-2'>
          Submit
        </LoadingButton>
      ) : (
        <Button
          fullWidth
          variant='contained'
          size='large'
          className='mb-2'
          onClick={() => addToCart(product._id)}
        >
          В корзину
        </Button>
      )}
    </div>
  );
};

export default Product;
