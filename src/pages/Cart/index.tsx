import { Navigate } from 'react-router-dom';
import BasicWrapper from '../../components/BasicWrapper';
import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCartItems } from '../../store/Slices/CartSlice';
import { useEffect, useState } from 'react';
import { selectIsAuth } from '../../store/Slices/AuthSlice';
import CartProduct from '../../components/CartProduct';
import Loading from '../../components/Loading/Loading';
import styles from './cart.module.sass';
import { ICartProduct } from '../../interfaces/cartProduct';
import { Button, ButtonProps, Checkbox, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

function Cart() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const [isAccepted, setIsAccepted] = useState(false);
  const BuyButton = styled(Button)<ButtonProps>(() => ({
    color: '#fff',
    transitionDuration: '.4s',
    backgroundColor: '#41AF4C',
    height: '45px',
    borderRadius: '10px',
    fontSize: '17.5px',
    '&:hover': {
      backgroundColor: '#47BE53',
      transitionDuration: '.4s',
    },
  }));
  let allItems = 0;
  let finalPrice = 0;
  const { cartItems, loading }: { cartItems: ICartProduct[]; loading: boolean } = useAppSelector(
    state => state.cart,
  );

  cartItems.forEach(product => (allItems += product.quantity));
  cartItems.forEach(product => (finalPrice += product.product.price * product.quantity));
  finalPrice += (finalPrice * 3) / 100;
  const finalPriceWatched = useSpring({
    number: finalPrice,
    from: { number: 0 },
    config: { duration: 600 },
  });

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return (
    <BasicWrapper>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <div className='container mt-5'>
          <div className='row'>
            <div className={`${styles.products} col-8`}>
              {cartItems?.map((product, index) => (
                <CartProduct product={product.product} quantity={product.quantity} key={index} />
              ))}
            </div>
            <div className='position-relative col-4 '>
              <div className={`${styles.buyPart} p-4 position-sticky`}>
                <div className='row'>
                  <div className='col-12 fs-5' style={{ color: '#424347' }}>
                    <p>Товаров: {allItems}</p>
                    <p>Товары поступят 18 июля</p>
                  </div>
                </div>
                <div>
                  <div className='row'>
                    <div className='col-12 fs-5' style={{ color: '#424347' }}>
                      <b>Налог 3%</b>
                      <br />
                      <b>
                        Итого:{' '}
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
                  <BuyButton
                    variant='contained'
                    disabled={!isAccepted || allItems <= 0}
                    fullWidth
                    color='success'
                    className='mt-4 mb-3'
                  >
                    Купить
                  </BuyButton>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Checkbox
                      color='success'
                      onClick={() => {
                        setIsAccepted(!isAccepted);
                      }}
                      checked={isAccepted}
                    />
                    <span style={{ fontSize: '14px' }}>
                      Соглашаюсь с правилами пользования торговой площадкой и возврата
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BasicWrapper>
  );
}

export default Cart;
