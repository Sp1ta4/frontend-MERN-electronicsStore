import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';
import axios from '../../axios';
interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async function () {
  const response = await axios.get('http://localhost:4444/products');
  return response!.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.products;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default productsSlice.reducer;
