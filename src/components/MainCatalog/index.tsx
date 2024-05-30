import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './MainCatalog.module.sass';
function MainCatalog() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      keyBoardControl={true}
      customTransition='all .5s'
      transitionDuration={1100}
      containerClass={`${styles.carousel} carousel-container`}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass='carousel-item-padding-40-px'
    >
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/phone.png' alt='phone' />
        </div>
        <h5>Смартфоны</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/macbook.png' alt='macbook' />
        </div>
        <h5>Ноутбуки</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/mac.png' alt='mac' />
        </div>
        <h5>Компьютеры</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/monitor.png' alt='monitor' />
        </div>
        <h5>Телевизоры</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/tablet.png' alt='tablet' />
        </div>
        <h5>Планшеты</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/alisa.png' alt='alisa' />
        </div>
        <h5>Колонки</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/phone.png' alt='phone' />
        </div>
        <h5>Смартфоны</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/macbook.png' alt='macbook' />
        </div>
        <h5>Ноутбуки</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/mac.png' alt='mac' />
        </div>
        <h5>Компьютеры</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/monitor.png' alt='monitor' />
        </div>
        <h5>Телевизоры</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/tablet.png' alt='tablet' />
        </div>
        <h5>Планшеты</h5>
      </div>
      <div className={`${styles.item} d-flex flex-column`}>
        <div className={styles.itemImage}>
          <img src='/images/alisa.png' alt='alisa' />
        </div>
        <h5>Колонки</h5>
      </div>
    </Carousel>
  );
}

export default MainCatalog;
