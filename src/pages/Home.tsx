import Carousel from '../components/Carousel';
import Header from '../components/Header';
import MainCatalog from '../components/MainCatalog';
import { fetchProducts } from '../store/Slices/ProductsSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import BasicWrapper from '../components/BasicWrapper';

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    </BasicWrapper>
  );
}

export default Home;
