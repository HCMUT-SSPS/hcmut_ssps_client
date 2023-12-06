export interface User {
  id: number;
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  phone: string;
  city: string;
  timeZone: string;
  shortBio: string;
  password: string;
  avatar: string;
  isManager: boolean;
}

export interface UsersList {
  userName: string;
  fullName: string;
  pages: number;
  jobPending: number;
  status: string;
}
