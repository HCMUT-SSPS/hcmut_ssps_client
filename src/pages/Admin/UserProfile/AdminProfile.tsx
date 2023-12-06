import { FC } from 'react';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { AdminAccount } from '../../../data/account';
import { Page } from '../../../layouts';

const AdminProfile: FC = () => {
  return (
    <Page title='Notifications'>
      <div className='w-full pb-10'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>
            Users {'>'} Admin Profile
          </h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>
        <form className='mt-6 flex flex-col px-10'>
          <div className='flex w-full flex-col justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0'>
            <div className='flex items-center'>
              <img
                src={AdminAccount.avatar}
                alt='User avatar'
                className='h-[128px] w-[128xp] rounded-lg'
              />
              <div className='ml-4 flex flex-col space-y-1'>
                <h2 className='text-[32px] font-medium text-gray-700'>
                  {AdminAccount.firstName + ' ' + AdminAccount.lastName}
                </h2>
                <p>Student</p>
              </div>
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
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.firstName}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='last-name' className='text-[14px] font-semibold text-gray-800'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.lastName}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='student-id' className='text-[14px] font-semibold text-gray-800'>
                  Student ID
                </label>
                <input
                  type='number'
                  id='student-id'
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.studentId}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='timezone' className='text-[14px] font-semibold text-gray-800'>
                  Role
                </label>
                <select
                  id='timezone'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value='Moderator'
                  disabled
                >
                  <option value='Moderator'>Moderator</option>
                  <option value='Manager'>Manager</option>
                  <option value='Administrator'>Administrator</option>
                </select>
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
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.email}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='tel' className='text-[14px] font-semibold text-gray-800'>
                  Phone Number
                </label>
                <input
                  type='number'
                  id='tel'
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.phone}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='city' className='text-[14px] font-semibold text-gray-800'>
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  disabled
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.city}
                />
              </div>
              <div className='flex w-full flex-col space-y-[10px]'>
                <label htmlFor='timezone' className='text-[14px] font-semibold text-gray-800'>
                  Timezone
                </label>
                <select
                  id='timezone'
                  className='rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                  value={AdminAccount.timeZone}
                  disabled
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
                  value={AdminAccount.shortBio}
                  disabled
                  className='h-[120px] rounded-[6px] border-[1px] border-gray-500 px-4 py-3 text-[15px]'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default AdminProfile;
