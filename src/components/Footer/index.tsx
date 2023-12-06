import { FC } from 'react';

import { Icon } from '..';

const Footer: FC = () => {
  return (
    <div className='flex w-full flex-col bg-green-900 px-10 py-[80px] lg:px-[52px] xl:flex-row xl:space-x-[140px] xl:px-[64px] 2xl:space-x-[160px] 2xl:px-[72px]'>
      <div className='mb-10 flex flex-col space-y-8 xl:mb-0'>
        <div className='flex items-center space-x-4'>
          <Icon.LogoLarge className='h-[68px] w-[68px] text-white' />
          <p className='text-[44px] font-bold text-white'>
            <i>Print</i>Pulse
          </p>
        </div>
        <p className='max-w-[310px] text-[14px] text-white'>
          PrintPulse is a project which belongs to HCMUT-SPSS aiming to help students in school with
          the printing services
        </p>
      </div>
      <div className='flex justify-start space-x-[120px] 2xl:space-x-[160px]'>
        <div className='flex flex-col items-start space-y-5'>
          <p className='text-[32px] text-white'>Helpdesk Center</p>
          <p className='text-[18px] text-white'>
            <b>Location</b>
            <br />
            &ensp;• Room 602 - A4 Building, District 10 Campus
            <br />
            &ensp;• Room 201 - B1 Building, Thu Duc Campus
            <br />
            <b>Phone Number</b>: (+84) 123 456 789
            <br />
            <b>Email Address</b>: printpulsecs@gmail.com
          </p>
        </div>
        <div className='flex flex-col items-start space-y-5'>
          <p className='text-[32px] text-white'>Useful Link</p>
          <div className='flex flex-col space-y-2 text-[18px] font-medium text-white'>
            <a href='https://mybk.hcmut.edu.vn/my/index.action' target='_blank' rel='noreferrer'>
              MyBK
            </a>
            <a href='https://e-learning.hcmut.edu.vn/' target='_blank' rel='noreferrer'>
              BKElearning
            </a>
            <a href='https://bkpay.hcmut.edu.vn/bkpay' target='_blank' rel='noreferrer'>
              BK-Pay
            </a>
            <a href='https://hcmut.edu.vn/' target='_blank' rel='noreferrer'>
              HCMUT Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
