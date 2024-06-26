import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { useAppDispatch } from './store/hooks';
import { fetchUser } from './store/Slices/AuthSlice';
import { useEffect } from 'react';
function App() {
  const dispatch = useAppDispatch();
  // const isAuth = useAppSelector(selectIsAuth);

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
