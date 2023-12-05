import { FC } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';
import { toast } from 'react-toastify';

import { Icon } from '../../../components';
import useBoundStore from '../../../store';

import StepIndicator from './StepIndicator';

interface FinalReviewProps {
  setCurrentStep: (nextStep: number) => void;
}

const FinalReview: FC<FinalReviewProps> = ({ setCurrentStep }) => {
  const requestInfo = useBoundStore.use.requestInfo();
  const resetRequest = useBoundStore.use.resetRequest();

  const sendRequest = () => {
    resetRequest();
    setCurrentStep(0);
    toast.success('Your request has been sent');
  };

  return (
    <div className='flex h-[100vh] flex-col p-10'>
      <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
      <StepIndicator currentStep={3} />
      <div className='mt-10 flex flex-col space-y-6 lg:flex-row lg:justify-evenly lg:space-y-0'>
        <section>
          <h2 className='mb-6 text-xl font-semibold text-gray-700'>Order Summary</h2>
          <Table>
            <Thead className='text-xs/tight 2xl:text-sm/tight'>
              <Tr>
                <Th>Deliver Time</Th>
                <Th>Printer</Th>
                <Th>Paper</Th>
                <Th>Document Name</Th>
                <Th>Attributes</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className='text-[12px] text-gray-500'>
                <Td>
                  {requestInfo.deliverTime}
                  <br />
                  {requestInfo.deliverDate}
                </Td>
                <Td>
                  {requestInfo.printer}
                  <br />
                  {requestInfo.campus}
                </Td>
                <Td>
                  <div className='flex items-center justify-center rounded-[4px] bg-[#F8B545] px-2 py-1 text-white'>
                    {requestInfo.copies}
                  </div>
                </Td>
                <Td>{requestInfo.document}</Td>
                <Td>
                  {' '}
                  Page range: {requestInfo.pageRange}
                  <br />
                  {requestInfo.orientation}
                  <br />
                  {requestInfo.paperSize}
                  <br />
                  {requestInfo.printSides}
                  <br />
                  {requestInfo.color}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </section>
        <section className='flex w-full flex-col lg:w-[30%]'>
          <h2 className='mb-6 text-xl font-semibold text-gray-700'>Paper Balance</h2>
          <div className='mb-4 flex w-full items-center space-x-3 rounded-xl bg-green-50 py-4 pl-4'>
            <div className='flex h-[48px] w-[48px] items-center justify-center rounded-full bg-green-900'>
              <Icon.File className='h-6 w-6' />
            </div>
            <div>
              <p className='text-[18px] font-semibold text-green-900'>349</p>
              <p className='text-[12px]'>Paper sheets left</p>
            </div>
          </div>
          <div className='relative flex w-full items-center space-x-3 rounded-xl bg-orange-50 py-4 pl-4'>
            <div className='flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F8B545]'>
              <Icon.Wallet className='h-6 w-6' />
            </div>
            <div>
              <div className='flex justify-start'>
                <p className='text-[18px] font-semibold text-green-900'>11.000.000</p>
                <p className='text-[12px] font-semibold text-green-900'>VND</p>
              </div>
              <p className='text-[12px]'>Bank Account</p>
            </div>
          </div>
        </section>
      </div>
      <div className='mt-[160px] flex space-x-3 self-end pb-10'>
        <button
          onClick={() => setCurrentStep(2)}
          className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'
        >
          Previous Step
        </button>
        <button onClick={sendRequest} className='rounded-lg bg-green-900 px-6 py-2 text-white'>
          Send Request
        </button>
      </div>
    </div>
  );
};

export default FinalReview;