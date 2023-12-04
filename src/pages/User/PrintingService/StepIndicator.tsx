import { FC } from 'react';

import { Icon } from '../../../components';

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className='mt-10 flex flex-col items-start space-y-4 xl:flex-row xl:items-center xl:justify-evenly xl:space-y-0'>
      <div className='flex items-center space-x-5'>
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-green-900'>
          <Icon.Check.Outlined className='h-6 w-6' />
        </div>
        <p className='font-semibold text-gray-700'>Upload the Document</p>
      </div>
      <Icon.ChevronRight className='hidden h-4 w-4 xl:block' />
      <div className='flex items-center space-x-5'>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-900 text-green-900 ${
            currentStep >= 2 && 'bg-green-900'
          }`}
        >
          {currentStep >= 2 ? <Icon.Check.Outlined className='h-6 w-6' /> : '2'}
        </div>
        <p className='font-semibold text-gray-700'>Print Configurations</p>
      </div>
      <Icon.ChevronRight className='hidden h-4 w-4 xl:block' />
      <div className='flex items-center space-x-5'>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
            currentStep < 2 ? 'border-gray-500 text-gray-500' : 'border-green-900 text-green-900'
          } ${currentStep > 2 && 'bg-green-900'}`}
        >
          {currentStep >= 3 ? <Icon.Check.Outlined className='h-6 w-6' /> : '3'}
        </div>
        <p className='font-semibold text-gray-700'>Printer Location & Deliver Time</p>
      </div>
      <Icon.ChevronRight className='hidden h-4 w-4 xl:block' />
      <div className='flex items-center space-x-5'>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
            currentStep < 3 ? 'border-gray-500 text-gray-500' : 'border-green-900 text-green-900'
          } ${currentStep > 3 && 'bg-green-900'}`}
        >
          4
        </div>
        <p className='font-semibold text-gray-700'>Final Review</p>
      </div>
    </div>
  );
};

export default StepIndicator;
