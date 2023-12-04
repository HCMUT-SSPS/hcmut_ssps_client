import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Icon, Sidebar } from '../../components';
import UserDashboard from '../../pages/User/Dashboard';

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
          {
            name: 'Settings',
            path: '/settings',
            Icon: Icon.Gear.Outlined,
            IconFill: Icon.Gear.Filled,
          },
        ]}
      />
      <Routes>
        <Route path='*' element={<div>Not found</div>} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
