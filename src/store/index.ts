import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './Slices/ProductsSlice.ts';
import CartSlice from './Slices/CartSlice.ts';
import AuthSlice from './Slices/AuthSlice.ts';

export const store = configureStore({
  reducer: { products: ProductSlice, auth: AuthSlice, cart: CartSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
