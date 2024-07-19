import Carousel from '../components/Carousel';
import Header from '../components/Header';
import MainCatalog from '../components/MainCatalog';
import { fetchProducts } from '../store/Slices/ProductsSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import BasicWrapper from '../components/BasicWrapper';
import { selectIsAuth } from '../store/Slices/AuthSlice';
import { Navigate } from 'react-router-dom';
import Products from '../components/Products';

function Home() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (!isAuth) {
    return <Navigate to='/login' />;
  }
  return (
    <BasicWrapper>
      <Header />
      <div className='newsCarousel d-flex justify-content-center align-items-center mt-5'>
        <Carousel />
      </div>
      <div className='mainCatalog mt-5 d-flex flex-column w-100'>
        <h2 className='mb-4'>Каталог</h2>
        <MainCatalog />
      </div>
      <Products />
    </BasicWrapper>
  );
}

export default Home;
