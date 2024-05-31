import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IAuthResponse, ILogin, IRegister } from '../../interfaces/auth';
import { isAxiosError, AxiosResponse, AxiosError } from 'axios';
import { RootState } from '..';

interface IAuthState {
  data: null | IAuthResponse;
  loading: boolean;
  error: string | null | unknown;
}

const initialState: IAuthState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk<IAuthResponse, void, { rejectValue: string }>(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await axios.get('/auth/getUser');
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Ошибка авторизации');
    }
  },
);
export const fetchRegister = createAsyncThunk<IAuthResponse, IRegister, { rejectValue: string }>(
  'auth/fetchRegister',
  async (params: IRegister, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await axios.post('/auth/registration', params);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Ошибка авторизации');
    }
  },
);
export const fetchLogin = createAsyncThunk<IAuthResponse, ILogin, { rejectValue: string }>(
  'auth/fetchLogin',
  async (params: ILogin, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAuthResponse> = await axios.post('/auth/login', params);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Ошибка авторизации');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.data = null;
      window.localStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.data = null;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = 'Ошибка авторизации';
        }
        state.loading = false;
      })
      .addCase(fetchRegister.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.data = null;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = 'Ошибка авторизации';
        }
        state.loading = false;
      })
      .addCase(fetchUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.data = null;
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = 'Ошибка авторизации';
        }
        state.loading = false;
      });
  },
});

export const selectIsAuth = (state: RootState): boolean => Boolean(state.auth.data);

export default authSlice.reducer;
export const { logout } = authSlice.actions;
