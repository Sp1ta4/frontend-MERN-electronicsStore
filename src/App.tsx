import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchUser } from './store/Slices/AuthSlice';
import { useEffect } from 'react';
import Cart from './pages/Cart';
function App() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Auth />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);
  return loading ? null : <RouterProvider router={router} />;
}

export default App;
