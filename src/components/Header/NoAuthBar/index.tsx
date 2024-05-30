import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

function NoAuthBar() {
  return (
    <div className='noAuth d-flex justify-content-between align-items-center'>
      <Button variant='contained' color='primary' component={Link} to='/login' endIcon={<LoginIcon />}>
        Войти
      </Button>
      <Button className='ms-3' variant='outlined' color='success' component={Link} to='/login'>
        Зарегистрироваться
      </Button>
    </div>
  );
}

export default NoAuthBar;
