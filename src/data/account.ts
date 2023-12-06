import { User } from '../typings';

export const UserAccount: User = {
  id: 1,
  firstName: 'Khanh',
  lastName: 'Nguyen',
  studentId: '19521300',
  phone: '0123456789',
  email: 'user@hcmut.edu.vn',
  city: 'Ho Chi Minh City',
  timeZone: 'GMT+7 - Viet Nam',
  shortBio: 'I am a student at Ho Chi Minh City University of Technology.',
  password: 'copium@123',
  isManager: false,
  avatar: 'https://i.imgur.com/8Km9tLL.png',
};

export const AdminAccount: User = {
  id: 2,
  firstName: 'Tan',
  lastName: 'Le',
  studentId: '19521300',
  email: 'admin@hcmut.edu.vn',
  phone: '0123456789',
  city: 'Ho Chi Minh City',
  timeZone: 'GMT+7 - Viet Nam',
  shortBio: 'I am a student at Ho Chi Minh City University of Technology.',
  password: 'copium@123',
  isManager: true,
  avatar: 'https://i.imgur.com/8Km9tLL.png',
};
