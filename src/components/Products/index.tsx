import { IProduct } from '../../interfaces/product';
import { useAppSelector } from '../../store/hooks';
import Loading from '../Loading/Loading';
import styles from './Product.module.sass';
import Product from '../Product';

function Products() {
  const { products, loading }: { products: IProduct[]; loading: boolean } = useAppSelector(
    state => state.products,
  );
  return loading ? (
    <Loading />
  ) : (
    <div className={`${styles.products}`}>
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

export default Products;
