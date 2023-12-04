import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Icon, Sidebar } from '../../components';

const DashboardPage = lazy(() => import('../../pages/Admin/Dashboard'));
const PrintersListPage = lazy(() => import('../../pages/Admin/Printers/List'));
const AddPrinterPage = lazy(() => import('../../pages/Admin/Printers/Add'));

const AdminRoutes: FC = () => {
  return (
    <>
      <Sidebar
        items={[
          {
            name: 'Dashboard',
            path: '/admin/dashboard',
            Icon: Icon.House.Outlined,
            IconFill: Icon.House.Filled,
          },
          {
            name: 'Printers',
            path: '/admin/printers',
            Icon: Icon.Printer.Outlined,
            IconFill: Icon.Printer.Filled,
          },
          {
            name: 'Activity Logs',
            path: '/admin/logs',
            Icon: Icon.FileSearch.Outlined,
            IconFill: Icon.FileSearch.Filled,
          },
          {
            name: 'Users',
            path: '/admin/users',
            Icon: Icon.User.Outlined,
            IconFill: Icon.User.Filled,
          },
          {
            name: 'Reports',
            path: '/admin/reports',
            Icon: Icon.ChartLine,
          },
          {
            name: 'Notifications',
            path: '/admin/notifications',
            Icon: Icon.Bell.Outlined,
            IconFill: Icon.Bell.Filled,
          },
          {
            name: 'Settings',
            path: '/admin/settings',
            Icon: Icon.Gear.Outlined,
            IconFill: Icon.Gear.Filled,
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
        <Route
          path='/printers'
          element={
            <Suspense fallback={null}>
              <PrintersListPage />
            </Suspense>
          }
        >
          <Route
            path='/add'
            element={
              <Suspense fallback={null}>
                <AddPrinterPage />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
