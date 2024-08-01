import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { ICartProduct } from '../../interfaces/cartProduct';

interface IProductState {
  cartItems: ICartProduct[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: IProductState = {
  cartItems: [],
  loading: false,
  error: null,
};

export const fetchCartItems = createAsyncThunk('cart/cart', async function () {
  const response = await axios.get('/cart');
  return response!.data;
});
export const fetchAddToCart = createAsyncThunk(
  'cart/addItem',
  async (productId: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios.post('/cart/addItem', { productId });

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Не удалось добавить в корзину');
    }
  },
);
export const fetchMinusItem = createAsyncThunk(
  'cart/minusItem',
  async (productId: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios.post('/cart/minusItem', { productId });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Не удалось удалить товар, попробуйте позже');
    }
  },
);
export const fetchRemoveItem = createAsyncThunk(
  'cart/removeItem',
  async (productId: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios.delete(`/cart/removeItem/${productId}`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      return rejectWithValue('Не удалось удалить товар, попробуйте позже');
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartItems = payload.cartItems;
      })
      .addCase(fetchCartItems.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAddToCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddToCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartItems = payload.cartItems;
      })
      .addCase(fetchAddToCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchRemoveItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRemoveItem.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartItems = payload.cartItems;
      })
      .addCase(fetchRemoveItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchMinusItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMinusItem.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartItems = payload.cartItems;
      })
      .addCase(fetchMinusItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
