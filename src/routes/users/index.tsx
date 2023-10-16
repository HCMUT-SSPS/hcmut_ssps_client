import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));

const UserRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={null}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default UserRoutes;
