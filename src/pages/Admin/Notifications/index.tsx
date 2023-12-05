import { FC } from 'react';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { Page } from '../../../layouts';

const Notifications: FC = () => {
  return (
    <Page title='Notifications'>
      <div className='flex w-full flex-col'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>
            Notifications
          </h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>
      </div>

      <main className='flex flex-col gap-y-6 p-10'>
        <div className='flex flex-col gap-y-4'>
          <div className='w-fit rounded-lg bg-[#F0FDF4] px-4 py-2 text-base/normal font-medium text-green-900'>
            Today
          </div>

          <div className='flex flex-row justify-between gap-x-[180px] rounded-lg border border-[#E5E7EB] bg-white p-6'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-lg/normal font-semibold uppercase text-[#1F2937]'>
                <span className='rounded-lg bg-red-500 px-5 py-1 text-base/normal font-medium text-white'>
                  Error
                </span>{' '}
                Printer <span className='text-red-500'>bk_server_1_1a</span> is out of ink,
                temporarily shutting down services.
              </h1>
              <div className='text-[#1F2937]'>
                <p className='text-base/normal font-bold underline'>Log: x2415as53</p>
                <p className='text-base/normal'>
                  Printer bk_server_1_1a is out of ink, temporarily shut down services. Requesting
                  immediate attention from SPSO to maintain services.
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-sm/normal font-medium'>8:35 PM</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='w-fit rounded-lg bg-[#F0FDF4] px-4 py-2 text-base/normal font-medium text-green-900'>
            Yesterday
          </div>

          <div className='flex flex-row justify-between gap-x-[180px] rounded-lg border border-[#E5E7EB] bg-white p-6'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-lg/normal font-semibold uppercase text-[#1F2937]'>
                <span className='rounded-lg bg-[#F8B545] px-5 py-1 text-base/normal font-medium text-white'>
                  Warning
                </span>{' '}
                Printer <span className='text-[#F8B545]'>bk_server_2_2b</span> is reaching paper
                limit, temporarily shutting down services.
              </h1>
              <div className='text-[#1F2937]'>
                <p className='text-base/normal font-bold underline'>Log: w2132as77</p>
                <p className='text-base/normal'>
                  Printer bk_server_2_2b is reaching paper limit. Requesting immediate attention
                  from SPSO to maintain services.
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-sm/normal font-medium'>3:23 PM</p>
          </div>

          <div className='flex flex-row justify-between gap-x-[180px] rounded-lg border border-[#E5E7EB] bg-white p-6'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-lg/normal font-semibold uppercase text-[#1F2937]'>
                <span className='rounded-lg bg-[#F8B545] px-5 py-1 text-base/normal font-medium text-white'>
                  Warning
                </span>{' '}
                Printer <span className='text-[#F8B545]'>bk_server_5_5d</span> is reaching ink
                limit, temporarily shutting down services.
              </h1>
              <div className='text-[#1F2937]'>
                <p className='text-base/normal font-bold underline'>Log: w2133as42</p>
                <p className='text-base/normal'>
                  Printer bk_server_5_5d is reaching ink limit. Requesting immediate attention from
                  SPSO to maintain services.
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-sm/normal font-medium'>10:35 AM</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='w-fit rounded-lg bg-[#F0FDF4] px-4 py-2 text-base/normal font-medium text-green-900'>
            Dec 1st, 2023
          </div>

          <div className='flex flex-row justify-between gap-x-[180px] rounded-lg border border-[#E5E7EB] bg-white p-6'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-lg/normal font-semibold uppercase text-[#1F2937]'>
                <span className='rounded-lg bg-[#1F2937] px-5 py-1 text-base/normal font-medium text-white'>
                  Restrict
                </span>{' '}
                User Lê Thanh Thiện (username: thien.lethanh) has been restricted.
              </h1>
              <div className='text-[#1F2937]'>
                <p className='text-base/normal font-bold underline'>Log: r1877as19</p>
                <p className='text-base/normal'>
                  User Lê Thanh Thiện (username: thien.lethanh) has been restricted by admin Tan Le
                  (username: tan.le) due to spam requests. Emails were sent to both user and admin
                  to review this issue. At January 25th, 2024 - User will have a meeting with the
                  OISP Faculty regarding the problems. SPSO personnels please take notices.
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-sm/normal font-medium'>8:00 PM</p>
          </div>

          <div className='flex flex-row justify-between gap-x-[180px] rounded-lg border border-[#E5E7EB] bg-white p-6'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='text-lg/normal font-semibold uppercase text-[#1F2937]'>
                <span className='rounded-lg bg-[#F8B545] px-5 py-1 text-base/normal font-medium text-white'>
                  Warning
                </span>{' '}
                Printer <span className='text-[#F8B545]'>bk_server_5_5d</span> is reaching ink
                limit, temporarily shutting down services.
              </h1>
              <div className='text-[#1F2937]'>
                <p className='text-base/normal font-bold underline'>Log: x2133as42</p>
                <p className='text-base/normal'>
                  Printer bk_server_5_5d is reaching ink limit. Requesting immediate attention from
                  SPSO to maintain services.
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-sm/normal font-medium'>10:35 AM</p>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default Notifications;
