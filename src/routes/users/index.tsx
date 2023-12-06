import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Icon, Sidebar } from '../../components';
import ActivityLogs from '../../pages/User/ActivityLogs';
import UserDashboard from '../../pages/User/Dashboard';
import Notifications from '../../pages/User/Notifications';
import PrintingService from '../../pages/User/PrintingService';
import UserProfile from '../../pages/User/UserProfile';

const UserRoutes: FC = () => {
  return (
    <>
      <Sidebar
        items={[
          {
            name: 'Dashboard',
            path: '/dashboard',
            Icon: Icon.House.Outlined,
            IconFill: Icon.House.Filled,
          },
          {
            name: 'Printing Services',
            path: '/printing',
            Icon: Icon.Printer.Outlined,
            IconFill: Icon.Printer.Filled,
          },
          {
            name: 'Activity Logs',
            path: '/logs',
            Icon: Icon.FileSearch.Outlined,
            IconFill: Icon.FileSearch.Filled,
          },
          {
            name: 'Notifications',
            path: '/notifications',
            Icon: Icon.Bell.Outlined,
            IconFill: Icon.Bell.Filled,
          },
        ]}
      />
      <Routes>
        <Route path='*' element={<div>Not found</div>} />
        <Route
          path='/dashboard'
          element={
            <Suspense fallback={null}>
              <UserDashboard />
            </Suspense>
          }
        />
        <Route
          path='/printing'
          element={
            <Suspense fallback={null}>
              <PrintingService />
            </Suspense>
          }
        />
        <Route
          path='/notifications'
          element={
            <Suspense fallback={null}>
              <Notifications />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            <Suspense fallback={null}>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path='/logs'
          element={
            <Suspense fallback={null}>
              <ActivityLogs />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default UserRoutes;
