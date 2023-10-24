import { FC } from 'react';

import { SystemStatus as systemStatus } from '../../../data/AdminDashboard';
import { Page } from '../../../layouts';
import { parseUptime } from '../../../utils';

const Dashboard: FC = () => {
  return (
    <Page title='Dashboard'>
      <div className='flex h-full w-full flex-col'>
        <div
          className='relative flex h-auto w-full justify-start overflow-hidden bg-[#064635] px-10 pb-12 
          pt-8 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.2)]'
          style={{
            backgroundImage: 'url(/src/assets/images/Background.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
        >
          <div className='w-fit text-white'>
            <h1 className='w-fit md:text-lg/tight xl:text-xl/tight 2xl:text-2xl/tight'>
              Welcome back,
            </h1>
            <h2 className='mt-1 w-fit font-semibold md:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight'>
              Le Ba Tan
            </h2>
            <h3 className='mt-2 w-fit text-sm/tight xl:text-base/tight'>
              "Don't let yesterday take up too much of today." - Will Rogers
            </h3>
          </div>
        </div>

        <main className='flex w-full flex-1 flex-row gap-x-6 p-10'>
          <section className='flex flex-1 flex-col gap-y-4'>
            <div
              className='flex w-full flex-col items-center justify-center gap-y-5 
              rounded-3xl bg-orange-50 p-6'
            >
              <div className='flex w-full flex-col items-center gap-y-1'>
                <h1 className='text-lg/tight font-semibold text-green-950'>System Status</h1>
                <h2 className='text-xs/tight font-normal'>
                  since{' '}
                  {systemStatus.from.toLocaleDateString('en-VN', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </h2>
              </div>

              <div className='flex w-full flex-col items-center gap-y-3'>
                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Errors</p>
                  <p className='text-sm/tight font-semibold text-red-500 2xl:text-base/tight'>
                    {systemStatus.currentStatus.errors}
                  </p>
                </div>

                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Warnings</p>
                  <p className='text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                    {systemStatus.currentStatus.errors}
                  </p>
                </div>

                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>System Uptime</p>
                  <p className='text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    {parseUptime(Date.now() - systemStatus.from.getTime())}
                  </p>
                </div>

                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Users</p>
                  <p className='text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    {systemStatus.currentStatus.users}
                  </p>
                </div>

                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Printers</p>
                  <p className='text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    {systemStatus.currentStatus.printers}
                  </p>
                </div>

                <div className='flex w-full flex-row justify-between gap-x-5'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Pending Requests</p>
                  <p className='text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                    {systemStatus.currentStatus.pendingRequests}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='flex flex-[3.2] flex-col'></section>
        </main>
      </div>
    </Page>
  );
};

export default Dashboard;
