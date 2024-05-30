import styles from './HeaderLogo.module.sass';
import { Link } from 'react-router-dom';

function HeaderLogo() {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <h1 className={`${styles.logoText}`}>SP-ONE</h1>
    </Link>
  );
}

export default HeaderLogo;
