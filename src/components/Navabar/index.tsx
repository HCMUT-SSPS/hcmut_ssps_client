import { FC } from 'react';

import { Icon } from '..';

const Navbar: FC = () => {
  return (
    <div className='flex w-full justify-between px-10 py-[26px] lg:px-[52px] xl:px-[64px] 2xl:px-[72px]'>
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <Icon.Logo className='text-green-900' />
        <p className='pointer-events-none select-none text-xl/normal font-bold text-green-900'>
          <i>Print</i>Pulse
        </p>
      </div>
      <div className='flex items-center justify-center gap-x-3'>
        <a
          href='https://mybk.hcmut.edu.vn/my/index.action'
          target='_blank'
          rel='noreferrer'
          className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-[600] text-green-900'
        >
          Back To MyBK
        </a>
        <button className='rounded-lg bg-green-900 px-6 py-2 text-white'>Print Docs</button>
      </div>
    </div>
  );
};

export default Navbar;
