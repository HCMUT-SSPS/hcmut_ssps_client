import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Icon, Sidebar } from '../../components';

const HomePage = lazy(() => import('../../pages/Home'));

const UserRoutes: FC = () => {
  return (
    <>
      <Sidebar
        items={[
          {
            name: 'Dashboard',
            path: '/dashboard',
            Icon: Icon.House,
            IconFill: Icon.HouseFill,
          },
          {
            name: 'Printing Services',
            path: '/printing',
            Icon: Icon.Printer,
            IconFill: Icon.PrinterFill,
          },
          {
            name: 'Activity Logs',
            path: '/logs',
            Icon: Icon.FileSearch,
            IconFill: Icon.FileSearchFill,
          },
          {
            name: 'Notifications',
            path: '/notifications',
            Icon: Icon.Bell,
            IconFill: Icon.BellFill,
          },
          {
            name: 'Settings',
            path: '/settings',
            Icon: Icon.Gear,
            IconFill: Icon.GearFill,
          },
        ]}
      />
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
