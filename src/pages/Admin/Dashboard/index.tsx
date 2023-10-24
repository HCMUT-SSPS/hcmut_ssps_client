import { FC } from 'react';

import { Page } from '../../../layouts';

const Dashboard: FC = () => {
  return (
    <Page title='Dashboard'>
      <main className='flex h-full w-full flex-col px-10'>
        <div className='relative -mx-10 flex w-[calc(100%+80px)] justify-end bg-green-900 pt-4'>
          <div className='absolute left-10 top-8 z-10 w-fit text-white'>
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

          <img
            src='/src/assets/images/Background.png'
            alt='admin dashboard background'
            className='relative aspect-[787/209] h-[209px] flex-shrink-0'
          />
        </div>
        here
      </main>
    </Page>
  );
};

export default Dashboard;
