import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Link } from 'react-router-dom';

function Navigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '232px', colorRendering: 'red' }} value={value} onChange={handleChange}>
      <BottomNavigationAction label='Каталог' value='list' icon={<FormatListBulletedOutlinedIcon />} />
      <BottomNavigationAction
        component={Link}
        to='/cart'
        label='Корзина'
        value='basket'
        icon={<ShoppingCartOutlinedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to='/profile'
        label='Профиль'
        value='profile'
        icon={<PermIdentityOutlinedIcon />}
      />
    </BottomNavigation>
  );
}

export default Navigation;
