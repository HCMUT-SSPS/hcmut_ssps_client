import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Icon, Sidebar } from '../../components';

const DashboardPage = lazy(() => import('../../pages/Home'));

const AdminRoutes: FC = () => {
  return (
    <>
      <Sidebar
        items={[
          {
            name: 'Dashboard',
            path: '/admin/dashboard',
            Icon: Icon.House,
            IconFill: Icon.HouseFill,
          },
          {
            name: 'Printers',
            path: '/admin/printers',
            Icon: Icon.Printer,
            IconFill: Icon.PrinterFill,
          },
          {
            name: 'Activity Logs',
            path: '/admin/logs',
            Icon: Icon.FileSearch,
            IconFill: Icon.FileSearchFill,
          },
          {
            name: 'Users',
            path: '/admin/users',
            Icon: Icon.User,
            IconFill: Icon.UserFill,
          },
          {
            name: 'Reports',
            path: '/admin/reports',
            Icon: Icon.ChartLine,
          },
          {
            name: 'Notifications',
            path: '/admin/notifications',
            Icon: Icon.Bell,
            IconFill: Icon.BellFill,
          },
          {
            name: 'Settings',
            path: '/admin/settings',
            Icon: Icon.Gear,
            IconFill: Icon.GearFill,
          },
        ]}
      />
      <Routes>
        <Route
          path='/dashboard'
          element={
            <Suspense fallback={null}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
