import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useStorage } from './hooks';
import { AdminRoutes, AuthRoutes, UserRoutes } from './routes';

import 'react-toastify/dist/ReactToastify.css';

import { User } from './typings';

const HomePage = lazy(() => import('./pages/Home'));

const App = () => {
  const [user] = useStorage<User | undefined>('user', undefined);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={null}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            element={
              user ? (
                <Navigate to={user.isManager ? '/admin/dashboard' : '/dashboard'} replace />
              ) : (
                <Outlet />
              )
            }
          >
            <Route path='/login/*' element={<AuthRoutes />} />
          </Route>
          {user && !user.isManager ? <Route path='*' element={<UserRoutes />} /> : null}
          {user && user.isManager ? <Route path='/admin/*' element={<AdminRoutes />} /> : null}
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
