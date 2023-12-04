import { FC } from 'react';

import { Page } from '../../../layouts';

const UserProfile: FC = () => {
  return (
    <Page title='Notifications'>
      <div className='w-full p-10'>
        <h1 className='text-2xl font-semibold text-green-900'>User Profile</h1>
        <form className='mt-6 flex flex-col'>
          <div className='flex w-full flex-col justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0'>
            <div className='flex items-center'>
              <img
                src='https://i.imgur.com/8Km9tLL.png'
                alt='User avatar'
                className='h-[128px] w-[128xp] rounded-lg'
              />
              <div className='ml-4 flex flex-col space-y-1'>
                <h2 className='text-[32px] font-medium text-gray-700'>Khanh Nguyen</h2>
                <p>Student</p>
              </div>
            </div>
            <div className='flex space-x-3 justify-self-end'>
              <button className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'>
                Remove
              </button>
              <button className='rounded-lg bg-green-900 px-6 py-2 text-white'>
                Change Avatar
              </button>
            </div>
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
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='Khánh'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='last-name' className='text-[14px] font-semibold text-gray-800'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='Nguyen'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='student-id' className='text-[14px] font-semibold text-gray-800'>
                  Student ID
                </label>
                <input
                  type='number'
                  id='student-id'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='12345678'
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
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='123@gmail.com.vn'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='tel' className='text-[14px] font-semibold text-gray-800'>
                  Phone Number
                </label>
                <input
                  type='number'
                  id='tel'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='12345678'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='city' className='text-[14px] font-semibold text-gray-800'>
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='Ho Chi Minh City'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='timezone' className='text-[14px] font-semibold text-gray-800'>
                  Timezone
                </label>
                <input
                  type='text'
                  id='timezone'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  placeholder='GMT+7 - Ho Chi Minh City'
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='bio' className='text-[14px] font-semibold text-gray-800'>
                  Short Bio
                </label>
                <textarea
                  id='bio'
                  className='h-[120px] rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                />
              </div>
            </div>
          </div>
          <button className='mt-9 self-end rounded-lg bg-green-900 px-10 py-4 font-semibold text-white'>
            Save Changes
          </button>
        </form>
      </div>
    </Page>
  );
};

export default UserProfile;
