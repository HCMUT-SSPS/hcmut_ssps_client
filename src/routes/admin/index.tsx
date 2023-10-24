import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../../pages/Admin/Dashboard'));

const AdminRoutes: FC = () => {
  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
