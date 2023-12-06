import { User, UsersList } from '../typings';

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

export const UsersAccount: UsersList[] = [
  {
    userName: 'khanh.nguyen1720',
    fullName: 'Nguyen Ki Tan Thanh',
    pages: 0,
    jobPending: 12,
    status: 'Online',
  },
  {
    userName: 'lan_teacherous',
    fullName: 'Co giao Lan',
    pages: 20,
    jobPending: 5,
    status: 'Online',
  },
  {
    userName: 'tan.nhanbacphan',
    fullName: 'Tan Nhan Bac Phan',
    pages: 10,
    jobPending: 23412,
    status: 'Restricted',
  },
  {
    userName: 'hoang.hon991',
    fullName: 'Hoang Han Cuu',
    pages: 23,
    jobPending: 53,
    status: 'Online',
  },
  {
    userName: 'lmao.cow',
    fullName: 'Lam Mao Cao',
    pages: 11,
    jobPending: 2,
    status: 'Offline',
  },
];

export const AdminsAccount: UsersList[] = [
  {
    userName: 'censorship.ment',
    fullName: 'Sang So Sinh Man',
    pages: 0,
    jobPending: 12,
    status: 'Offline',
  },
  {
    userName: 'trangtuananh',
    fullName: 'Trang Tuan Anh',
    pages: 32,
    jobPending: 15,
    status: 'Online',
  },
  {
    userName: 'khanh.cute',
    fullName: 'Nguyen Kute Ba0 Khanh',
    pages: 2,
    jobPending: 2,
    status: 'Online',
  },
];
