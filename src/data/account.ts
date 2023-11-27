import { User } from '../typings';

export const UserAccount: User = {
  id: 1,
  name: 'Khanh Nguyen',
  email: 'user@hcmut.edu.vn',
  password: 'copium@123',
  isManager: false,
  avatar: 'https://i.imgur.com/8Km9tLL.png',
};

export const AdminAccount: User = {
  id: 2,
  name: 'Tan Le',
  email: 'admin@hcmut.edu.vn',
  password: 'copium@123',
  isManager: true,
  avatar: 'https://i.imgur.com/8Km9tLL.png',
};
