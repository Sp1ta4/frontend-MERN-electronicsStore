import styles from './Login.module.sass';
import { Button, Link, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth } from '../../store/Slices/AuthSlice';
import { AppDispatch } from '../../store';
import { Navigate } from 'react-router-dom';

interface ILoginProps {
  setToggle: () => void;
}

interface IForm {
  email: string;
  password: string;
}

const Login: React.FC<ILoginProps> = ({ setToggle }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      email: 'gla33k@mail.ru',
      password: '12345678A',
    },
  });

  const submit: SubmitHandler<IForm> = async data => {
    const response = await dispatch(fetchLogin(data));
    if (typeof response.payload !== 'string' && 'token' in response.payload!) {
      const token = response.payload.token;
      window.localStorage.setItem('token', token);
    }
  };
  const errorHandler: SubmitErrorHandler<IForm> = data => {
    console.log(data);
  };

  const passwordOptions = {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long',
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Password must contain at least one letter or one number',
    },
  };
  const emailOptions = {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address',
    },
  };
  console.log(isAuth);

  if (isAuth) {
    return <Navigate to='/' />;
  }
  return (
    <div
      className={`${styles.login} p-4 d-flex align-items-center rounded bg-light`}
      style={{ marginBottom: '100px' }}
    >
      <form
        onSubmit={handleSubmit(submit, errorHandler)}
        className='w-100 h-100 d-flex flex-column justify-content-around align-items-center'
      >
        <TextField
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          fullWidth
          id='outlined-basic-em'
          label='Email'
          variant='outlined'
          type='email'
          margin='dense'
          {...register('email', emailOptions)}
        />
        <TextField
          error={errors.password ? true : false}
          helperText={errors.password?.message}
          fullWidth
          id='outlined-basic-ps'
          label='Password'
          variant='outlined'
          type='password'
          margin='dense'
          {...register('password', passwordOptions)}
        />
        <Button fullWidth variant='contained' size='large' endIcon={<LoginIcon />} type='submit'>
          Войти
        </Button>
        <Link component='button' variant='body2' onClick={setToggle}>
          Создать новый аккаунт
        </Link>
      </form>
    </div>
  );
};

export default Login;
