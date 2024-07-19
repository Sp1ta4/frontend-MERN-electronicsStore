import { Navigate } from 'react-router-dom';
import BasicWrapper from '../../components/BasicWrapper';
import Header from '../../components/Header';
import { IProduct } from '../../interfaces/product';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCartItems } from '../../store/Slices/CartSlice';
import { useEffect } from 'react';
import { selectIsAuth } from '../../store/Slices/AuthSlice';
import Product from '../../components/Product';
import Loading from '../../components/Loading/Loading';
import styles from './cart.module.sass';

function Cart() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  const { cartItems, loading }: { cartItems: IProduct[]; loading: boolean } = useAppSelector(
    state => state.cart,
  );
  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return (
    <BasicWrapper>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <div className={`${styles.products}`}>
          {cartItems?.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      )}
    </BasicWrapper>
  );
}

export default Cart;
