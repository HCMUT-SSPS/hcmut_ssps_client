import { FC, useState } from 'react';

import { Icon, Select } from '../../../components';

const User: FC = () => {
  const [reportTypes, setReportTypes] = useState<('monthly' | 'annual')[]>([
    'monthly',
    'monthly',
    'monthly',
    'monthly',
  ]);

  return (
    <div className='flex flex-col gap-y-4'>
      <h1 className='text-2xl/normal font-semibold text-green-900'>User Report</h1>

      <div className='flex flex-row justify-between gap-x-[120px] pr-[100px]'>
        <p className='line-clamp-3 text-base/normal text-[#1F2937]'>
          User focused reports providing information about users, their activity, their account
          balance and activity.
        </p>

        <div className='grid flex-1 grid-cols-[repeat(3,max-content)] items-center gap-y-4'>
          <p className='flex-1 text-base/normal font-semibold text-[#1f2937]'>User List</p>
          <Select
            className='ml-10 w-[256px]'
            options={[
              {
                value: 'monthly',
                label: 'Monthly Report',
              },
              {
                value: 'annual',
                label: 'Annual Report',
              },
            ]}
            value={{
              value: reportTypes[0],
              label: reportTypes[0] === 'annual' ? 'Annual Report' : 'Monthly Report',
            }}
            onChange={(e) => {
              const value = e?.value ?? 'monthly';
              setReportTypes((prev) => {
                const newReportTypes = [...prev];
                newReportTypes[0] = value as 'monthly' | 'annual';
                return newReportTypes;
              });
            }}
          />
          <div className='ml-6 flex flex-row gap-x-2'>
            <button>
              <Icon.Pdf className='h-6 w-auto' />
            </button>
            <button>
              <Icon.Excel className='h-6 w-auto' />
            </button>
          </div>

          <p className='flex-1 text-base/normal font-semibold text-[#1f2937]'>Executive Summary</p>
          <Select
            className='ml-10 w-[256px]'
            options={[
              {
                value: 'monthly',
                label: 'Monthly Report',
              },
              {
                value: 'annual',
                label: 'Annual Report',
              },
            ]}
            value={{
              value: reportTypes[1],
              label: reportTypes[1] === 'annual' ? 'Annual Report' : 'Monthly Report',
            }}
            onChange={(e) => {
              const value = e?.value ?? 'monthly';
              setReportTypes((prev) => {
                const newReportTypes = [...prev];
                newReportTypes[1] = value as 'monthly' | 'annual';
                return newReportTypes;
              });
            }}
          />
          <div className='ml-6 flex flex-row gap-x-2'>
            <button>
              <Icon.Pdf className='h-6 w-auto' />
            </button>
            <button>
              <Icon.Excel className='h-6 w-auto' />
            </button>
          </div>

          <p className='flex-1 text-base/normal font-semibold text-[#1f2937]'>
            User Printing - Summary
          </p>
          <Select
            className='ml-10 w-[256px]'
            options={[
              {
                value: 'monthly',
                label: 'Monthly Report',
              },
              {
                value: 'annual',
                label: 'Annual Report',
              },
            ]}
            value={{
              value: reportTypes[2],
              label: reportTypes[2] === 'annual' ? 'Annual Report' : 'Monthly Report',
            }}
            onChange={(e) => {
              const value = e?.value ?? 'monthly';
              setReportTypes((prev) => {
                const newReportTypes = [...prev];
                newReportTypes[2] = value as 'monthly' | 'annual';
                return newReportTypes;
              });
            }}
          />
          <div className='ml-6 flex flex-row gap-x-2'>
            <button>
              <Icon.Pdf className='h-6 w-auto' />
            </button>
            <button>
              <Icon.Excel className='h-6 w-auto' />
            </button>
          </div>

          <p className='flex-1 text-base/normal font-semibold text-[#1f2937]'>
            User Printing - Logs
          </p>
          <Select
            className='ml-10 w-[256px]'
            options={[
              {
                value: 'monthly',
                label: 'Monthly Report',
              },
              {
                value: 'annual',
                label: 'Annual Report',
              },
            ]}
            value={{
              value: reportTypes[3],
              label: reportTypes[3] === 'annual' ? 'Annual Report' : 'Monthly Report',
            }}
            onChange={(e) => {
              const value = e?.value ?? 'monthly';
              setReportTypes((prev) => {
                const newReportTypes = [...prev];
                newReportTypes[3] = value as 'monthly' | 'annual';
                return newReportTypes;
              });
            }}
          />
          <div className='ml-6 flex flex-row gap-x-2'>
            <button>
              <Icon.Pdf className='h-6 w-auto' />
            </button>
            <button>
              <Icon.Excel className='h-6 w-auto' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
