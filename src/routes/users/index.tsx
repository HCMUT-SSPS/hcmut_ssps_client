import { FC } from 'react';
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
        <Route path='/printing' element={<PrintingService />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/settings' element={<UserProfile />} />
        <Route path='/logs' element={<ActivityLogs />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
