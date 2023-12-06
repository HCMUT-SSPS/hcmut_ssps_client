import { FC, useState, useRef } from 'react';
import { toast } from 'react-toastify';

import { UserAccount } from '../../../data/account';
import { useStorage } from '../../../hooks';
import { Page } from '../../../layouts';

interface PublicProfile {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  phone: string;
  city: string;
  timeZone: string;
  shortBio: string;
}

const UserProfile: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useStorage<PublicProfile>('user', {
    firstName: UserAccount.firstName,
    lastName: UserAccount.lastName,
    studentId: UserAccount.studentId,
    email: UserAccount.email,
    phone: UserAccount.phone,
    city: UserAccount.city,
    timeZone: UserAccount.timeZone,
    shortBio: UserAccount.shortBio,
  });
  const [localAvatar, setLocalAvatar] = useStorage<string>('avatar', '');

  const [avatar, setAvatar] = useState<string>(localAvatar);
  const [firstName, setFirstName] = useState<string>(user?.firstName);
  const [lastName, setLastName] = useState<string>(user?.lastName);
  const [studentId, setStudentId] = useState<string>(user?.studentId);
  const [email, setEmail] = useState<string>(user?.email);
  const [tel, setTel] = useState<string>(user?.phone);
  const [city, setCity] = useState<string>(user?.city);
  const [timezone, setTimezone] = useState<string>(user?.timeZone);
  const [bio, setBio] = useState<string>(user?.shortBio);

  return (
    <Page title='Notifications'>
      <div className='w-full p-10'>
        <h1 className='text-2xl font-semibold text-green-900'>User Profile</h1>
        <form className='mt-6 flex flex-col'>
          <div className='flex w-full flex-col justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0'>
            <div className='flex items-center'>
              {avatar ? (
                <img src={avatar} alt='User avatar' className='h-[128px] w-[128xp] rounded-lg' />
              ) : (
                <img
                  src={UserAccount.avatar}
                  alt='User avatar'
                  className='h-[128px] w-[128xp] rounded-lg'
                />
              )}
              <div className='ml-4 flex flex-col space-y-1'>
                <h2 className='text-[32px] font-medium text-gray-700'>
                  {firstName + ' ' + lastName}
                </h2>
                <p>Student</p>
              </div>
            </div>
            <form className='flex space-x-3 justify-self-end'>
              <input
                className='hidden'
                ref={inputRef}
                type='file'
                accept='image/*'
                onChange={(e) => setAvatar(URL.createObjectURL(e.target.files![0]))}
              />
              <button
                onClick={() => setAvatar('')}
                className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'
              >
                Remove
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  inputRef.current?.click();
                }}
                className='rounded-lg bg-green-900 px-6 py-2 text-white'
              >
                Change Avatar
              </button>
            </form>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl font-semibold text-gray-700'>User Details</h2>
            <div className='mt-6 grid grid-cols-2 gap-6'>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='first-name' className='text-[14px] font-semibold text-gray-800'>
                  First Name
                </label>
                <input
                  type='text'
                  id='first-name'
                  onChange={(e) => setFirstName(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={firstName}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='last-name' className='text-[14px] font-semibold text-gray-800'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  onChange={(e) => setLastName(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={lastName}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='student-id' className='text-[14px] font-semibold text-gray-800'>
                  Student ID
                </label>
                <input
                  type='number'
                  id='student-id'
                  onChange={(e) => setStudentId(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={studentId}
                />
              </div>
            </div>
            <div className='mt-7 grid grid-cols-2 gap-6'>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='email' className='text-[14px] font-semibold text-gray-800'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={email}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='tel' className='text-[14px] font-semibold text-gray-800'>
                  Phone Number
                </label>
                <input
                  type='number'
                  id='tel'
                  onChange={(e) => setTel(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={tel}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='city' className='text-[14px] font-semibold text-gray-800'>
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  onChange={(e) => setCity(e.target.value)}
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={city}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='timezone' className='text-[14px] font-semibold text-gray-800'>
                  Timezone
                </label>
                <select
                  id='timezone'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  <option value='GMT+7 - Viet Nam'>GMT+7 - Viet Nam</option>
                  <option value='GMT+8 - China'>GMT+8 - China</option>
                  <option value='GMT+9 - Japan'>GMT+9 - Japan</option>
                </select>
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='bio' className='text-[14px] font-semibold text-gray-800'>
                  Short Bio
                </label>
                <textarea
                  id='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className='h-[120px] rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                />
              </div>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              toast.success('Updated successfully!');
              const updatedInfo = {
                firstName,
                lastName,
                studentId,
                email,
                phone: tel,
                city,
                timeZone: timezone,
                shortBio: bio,
              };
              setUser(updatedInfo);
              setLocalAvatar(avatar);
            }}
            className='mt-9 self-end rounded-lg bg-green-900 px-10 py-4 font-semibold text-white'
          >
            Save Changes
          </button>
        </form>
      </div>
    </Page>
  );
};

export default UserProfile;
