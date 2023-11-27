import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../../pages/Login'));
const UserLoginPage = lazy(() => import('../../pages/Login/User'));
const AdminLoginPage = lazy(() => import('../../pages/Login/Admin'));

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path=''
        element={
          <Suspense fallback={null}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path='users'
        element={
          <Suspense fallback={null}>
            <UserLoginPage />
          </Suspense>
        }
      />
      <Route
        path='admin'
        element={
          <Suspense fallback={null}>
            <AdminLoginPage />
          </Suspense>
        }
      />
      <Route path='*' element={<div>Not found</div>} />
    </Routes>
  );
};

export default AuthRoutes;
