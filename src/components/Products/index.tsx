import { IProduct } from '../../interfaces/product';
import { useAppSelector } from '../../store/hooks';
import styles from './Product.module.sass';
import Product from '../Product';

function Products() {
  const products: IProduct[] = useAppSelector(state => state.products.products);
  console.log(products);

  return (
    <div className={`${styles.products}`}>
      {products.map(product => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default Products;
