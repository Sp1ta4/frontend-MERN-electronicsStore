import { Checkbox, IconButton } from '@mui/material';
import { ICartProduct } from '../../interfaces/cartProduct';
import styles from './cartProduct.module.sass';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/hooks';
import { fetchAddToCart, fetchMinusItem, fetchRemoveItem } from '../../store/Slices/CartSlice';
import { useSpring, animated } from '@react-spring/web';

const CartProduct: React.FC<ICartProduct> = ({ product, quantity }) => {
  const dispatch = useAppDispatch();

  const onDelete = (productId: string) => {
    dispatch(fetchRemoveItem(productId));
  };
  const onAddItem = (productId: string) => {
    dispatch(fetchAddToCart(productId));
  };
  const onMinusItem = (productId: string) => {
    dispatch(fetchMinusItem(productId));
  };
  const finalPriceWatched = useSpring({
    number: product.price * quantity,
    from: { number: 0 },
    config: { duration: 600 },
  });
  return (
    <div className={`${styles.product} container-fluid`}>
      <div className='row h-100 p-2'>
        <Link
          to='/'
          className='col-2 position-relative'
          style={{
            backgroundImage: `url("images/phones/${product.images[0]}")`,
            backgroundSize: ' auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></Link>
        <div className='col-6 pt-3'>
          <Link to='/' className='text-decoration-none text-dark'>
            <b>{product.title}</b>
          </Link>
          <p>{product.colors.map(color => `${color + ' '}`)}</p>
        </div>
        <div
          className={`col-4 pt-3 pe-4 d-flex align-items-end justify-content-between flex-column ${styles.price}`}
        >
          <div className=' d-flex w-100 align-items-center justify-content-center '>
            <div className='quantity w-100 d-flex align-items-center justify-content-around'>
              <div>
                <IconButton onClick={() => onMinusItem(product._id)} disabled={quantity <= 1}>
                  <RemoveIcon />
                </IconButton>
                {quantity}
                <IconButton onClick={() => onAddItem(product._id)} disabled={quantity >= 99}>
                  <AddIcon />
                </IconButton>
              </div>
              <b style={{ fontSize: '17.8px' }} className='ms-2'>
                {
                  <animated.span>
                    {finalPriceWatched.number.to(n =>
                      n.toLocaleString('ru-RU', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }),
                    )}
                  </animated.span>
                }{' '}
                ₽
              </b>
            </div>
          </div>
          <div className='w-100 d-flex justify-content-around'>
            <Checkbox color='success' className={styles.deleteBtn} />
            <IconButton
              aria-label='delete'
              className={`${styles.deleteBtn}`}
              onClick={() => onDelete(product._id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
