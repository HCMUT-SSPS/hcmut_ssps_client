import { FC } from 'react';

import TestFile from '../../../assets/CC03_Trần Duy Minh_2152773.pdf';
import Pdf from '../../../components/PDF';

import StepIndicator from './StepIndicator';

const PrintDetails: FC = () => {
  return (
    <div className='flex h-[100vh] flex-col p-10'>
      <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
      <StepIndicator currentStep={2} />
      <div className='mt-10 flex w-full space-x-10'>
        <section className='show-scrollbar max-h-[100vh] w-[50%] overflow-auto lg:w-[60%]'>
          <Pdf file={TestFile} title={'test'} pageClassName='border border-[#bbbcbc] shadow' />
        </section>
        <section className='w-[40%] lg:w-[30%]'>
          <h2 className='text-xl font-semibold text-gray-700'>Page Range</h2>
          <div className='mt-4 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='page-range' className='font-semibold text-gray-700'>
              Page Range
            </label>
            <input
              type='text'
              id='page-range'
              placeholder='Select input'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
            <p className='text-[13px]'>For example: 1; 2-12; 3-6,12-21;...</p>
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='copies' className='font-semibold text-gray-700'>
              No of Copies
            </label>
            <input
              type='number'
              id='copies'
              placeholder='Select input'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <h2 className='mt-10 text-xl font-semibold text-gray-700'>Document Settings</h2>
          <div className='mt-4 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='orientation' className='font-semibold text-gray-700'>
              Orientation
            </label>
            <input
              type='text'
              id='orientation'
              placeholder='Portrait'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='size' className='font-semibold text-gray-700'>
              Paper Size
            </label>
            <input
              type='text'
              id='size'
              placeholder='A4'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='print-side' className='font-semibold text-gray-700'>
              Print Sides
            </label>
            <input
              type='text'
              id='print-side'
              placeholder='Single-sided'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='color' className='font-semibold text-gray-700'>
              Print In
            </label>
            <input
              type='text'
              id='color'
              placeholder='Black & White'
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <div className='mt-10 flex w-full justify-end space-x-3 self-end pb-10'>
            <button className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'>
              Previous Step
            </button>
            <button className='rounded-lg bg-green-900 px-6 py-2 text-white'>Next Step</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrintDetails;
