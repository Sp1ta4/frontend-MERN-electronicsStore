import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/product';
import axios from 'axios';

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

export const fetchProducts = createAsyncThunk<IProduct[]>(
  'products/fetchProducts',
  async function () {
    const data: IProduct[] = await axios.get('http://localhost:4444/products', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ1YzY5OTMxNTI3MjNjMzA0OTcxNTkiLCJpYXQiOjE3MTY1NDMwNzUsImV4cCI6MTcyNDMxOTA3NX0.Daur7sbtT9IVy7_60Xl9Mj3iEHiWUQjmBXli5oPyCvI',
      },
    });
    return data;
  },
);

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
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default productsSlice.reducer;
