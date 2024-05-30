import styles from './Header.module.sass';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Input from './HeaderInput/Input';
import Navigation from './HeaderNavigation/Navigation';
import { selectIsAuth } from '../../store/Slices/AuthSlice';
import { useSelector } from 'react-redux';
import NoAuthBar from './NoAuthBar';

function Header() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.header}`}>
      <HeaderLogo />
      <Input />
      {isAuth ? <Navigation /> : <NoAuthBar />}
    </header>
  );
}

export default Header;
