import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';
import axios from '../../axios';
import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
interface IProductState {
  cartItems: IProduct[];
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
export const fetchAddToCart = createAsyncThunk<void, string, { rejectValue: string }>(
  'cart/addItem',
  async (productId, { rejectWithValue }) => {
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
      .addCase(fetchAddToCart.fulfilled, state => {
        state.loading = false;
      })
      .addCase(fetchAddToCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
