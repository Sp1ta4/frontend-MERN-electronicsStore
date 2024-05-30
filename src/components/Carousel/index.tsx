import styles from './Carousel.module.sass';
import Carousel from 'react-bootstrap/Carousel';

function CarouselC() {
  return (
    <Carousel
      className={`${styles.carouselMain} carousel slide`}
      indicators={false}
    >
      <Carousel.Item>
        <div className='d-flex justify-content-evenly align-items-center text-light'>
          <div className='texts'>
            <h2>Умная колонка</h2>
            <h3 className='text-warning'>СКИДКА 30%</h3>
            <h4>при покупке второго товара</h4>
          </div>
          <img
            src='images/imageCarousel1.png'
            className='mt-5 pt-3'
            alt='Image'
            width={310}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenly align-items-center text-light'>
          <div className='texts'>
            <h2>Умная колонка</h2>
            <h3 className='text-warning'>СКИДКА 30%</h3>
            <h4>при покупке второго товара</h4>
          </div>
          <img
            src='images/imageCarousel1.png'
            className='mt-5 pt-3'
            alt='Image'
            width={310}
          />
        </div>{' '}
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenly align-items-center text-light'>
          <div className='texts'>
            <h2>Умная колонка</h2>
            <h3 className='text-warning'>СКИДКА 30%</h3>
            <h4>при покупке второго товара</h4>
          </div>
          <img
            src='images/imageCarousel1.png'
            className='mt-5 pt-3'
            alt='Image'
            width={310}
          />
        </div>{' '}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;
