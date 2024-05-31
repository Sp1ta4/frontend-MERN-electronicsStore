import styles from './Registration.module.sass';
import { Button, Link, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { fetchRegister } from '../../store/Slices/AuthSlice';
import { useAppDispatch } from '../../store/hooks';
interface IRegistrationProps {
  setToggle: () => void;
}
interface IForm {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}
const Registration: React.FC<IRegistrationProps> = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const submit: SubmitHandler<IForm> = async data => {
    const response = await dispatch(fetchRegister(data));
    if (typeof response.payload !== 'string' && 'token' in response.payload!) {
      const token = response.payload.token;
      window.localStorage.setItem('token', token);
    }
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
  const confirmPasswordOptions = {
    validate: (val: string) => {
      if (watch('password') !== val) {
        return 'Your passwords do not match';
      }
    },
  };
  const emailOptions = {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address',
    },
  };
  const usernameOptions = {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Username must be at least 3 characters long',
    },
  };
  return (
    <div
      className={`${styles.register} p-4 d-flex align-items-center rounded bg-light`}
      style={{ marginBottom: '100px' }}
    >
      <form
        onSubmit={handleSubmit(submit)}
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
          margin='normal'
          {...register('email', emailOptions)}
        />
        <TextField
          error={errors.username ? true : false}
          helperText={errors.username?.message}
          fullWidth
          id='outlined-basic-us'
          label='Username'
          variant='outlined'
          type='text'
          margin='normal'
          {...register('username', usernameOptions)}
        />
        <TextField
          error={errors.password ? true : false}
          helperText={errors.password?.message}
          fullWidth
          id='outlined-basic-ps'
          label='Password'
          variant='outlined'
          type='password'
          margin='normal'
          {...register('password', passwordOptions)}
        />
        <TextField
          error={errors.passwordConfirmation ? true : false}
          helperText={errors.passwordConfirmation?.message}
          fullWidth
          id='outlined-basic-cps'
          label='Confirm password'
          variant='outlined'
          type='password'
          margin='normal'
          {...register('passwordConfirmation', confirmPasswordOptions)}
        />

        <Button fullWidth variant='contained' size='large' className='mt-4' color='success' type='submit'>
          Зарегистрироваться
        </Button>
        <Link component='button' variant='body2' onClick={setToggle} className='mt-4'>
          Войти
        </Link>
      </form>
    </div>
  );
};

export default Registration;
