import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Input.module.sass';

function Input() {
  return (
    <Paper
      component='form'
      sx={{
        p: '4px 10px',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#EBEBEB',
        color: '#454545 ',
        borderRadius: '7px',
        boxShadow: '0',
      }}
      className={`${styles.input}`}
    >
      <IconButton
        type='button'
        sx={{ p: '10px', color: '#454545' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#454545' }}
        placeholder='Поиск'
        inputProps={{ 'aria-label': 'Поиск' }}
      />
    </Paper>
  );
}

export default Input;
