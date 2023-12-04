import { FC } from 'react';

import StepIndicator from './StepIndicator';

const Configurations: FC = () => {
  return (
    <div className='flex h-[100vh] flex-col p-10'>
      <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
      <StepIndicator currentStep={3} />
      <div className='mt-10 flex w-[360px] flex-col space-y-6'>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='campus' className='font-semibold text-gray-700'>
            Campus
          </label>
          <input
            type='text'
            id='campus'
            placeholder='Select input'
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          />
        </div>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='building' className='font-semibold text-gray-700'>
            Building
          </label>
          <input
            type='text'
            id='building'
            placeholder='Select input'
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          />
        </div>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='time' className='font-semibold text-gray-700'>
            Date & Time
          </label>
          <input
            type='date'
            id='time'
            placeholder='Select input'
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          />
        </div>
      </div>
      <div className='mt-[160px] flex space-x-3 self-end pb-10'>
        <button className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'>
          Previous Step
        </button>
        <button className='rounded-lg bg-green-900 px-6 py-2 text-white'>Next Step</button>
      </div>
    </div>
  );
};

export default Configurations;
