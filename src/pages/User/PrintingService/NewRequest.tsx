import { FC, useState } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import ForestBackground from '../../../assets/images/ForestBackground.png';
import TreeBackground from '../../../assets/images/TreeBackground.png';
import { Icon } from '../../../components';
import BrowseFile from '../../../components/Modal/BrowseFile';
import { Requests } from '../../../data/request';

interface NewRequestProps {
  setFile: (uploadFile: File[]) => void;
  setCurrentStep: (nextStep: number) => void;
}

const NewRequest: FC<NewRequestProps> = ({ setFile, setCurrentStep }) => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  const fileUpload = (uploadFile: File[]) => {
    setFile(uploadFile);
  };

  const setNextStep = (nextStep: number) => {
    setCurrentStep(nextStep);
  };

  return (
    <div className='flex space-x-4 px-10 py-10'>
      <BrowseFile
        show={show}
        onClose={closeModal}
        setFile={fileUpload}
        setCurrenStep={setNextStep}
      />
      <section className='flex w-full flex-col xl:w-[78%]'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
          <p className='mt-2 max-w-[640px]'>
            Printing Service is a service to enable printing for laptop, wireless and
            unauthenticated users without the need to install print drivers. To upload a document
            for printing, click Submit a Request.
          </p>
          <button
            onClick={() => setShow(true)}
            className='mt-6 flex w-fit items-center space-x-2 rounded-lg bg-green-900 px-10 py-4 hover:bg-green-700'
          >
            <p className='font-semibold text-white'>Submit a Request</p>
            <Icon.ArrowRight />
          </button>
        </div>
        <div className='mt-10 flex flex-1 flex-col gap-y-4'>
          <h1 className='text-xl/tight font-semibold text-green-900 2xl:text-2xl/tight'>
            Recent Requests
          </h1>

          <Table>
            <Thead className='text-xs/tight 2xl:text-sm/tight'>
              <Tr>
                <Th>Date & Time</Th>
                <Th>Printer</Th>
                <Th>Paper</Th>
                <Th>Document Name</Th>
                <Th>Attributes</Th>
                <Th>Deliver time</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Requests.map((request, idx) => (
                <Tr key={idx} className='text-[12px] text-gray-500'>
                  <Td>
                    {request.date}
                    <br />
                    {request.time}
                  </Td>
                  <Td>
                    {request.printer}
                    <br />
                    {request.campus}
                  </Td>
                  <Td>{request.copies}</Td>
                  <Td>{request.document}</Td>
                  <Td>
                    Page range: {request.pageRange}
                    <br />
                    {request.orientation}
                    <br />
                    {request.paperSize}
                    <br />
                    {request.printSides}
                    <br />
                    {request.color}
                  </Td>
                  <Td>
                    {request.deliverTime}
                    <br />
                    {request.deliverDate}
                  </Td>
                  <Td>
                    <div
                      className={`flex items-center justify-center rounded-[4px] ${
                        request.status === 'Printing' && 'bg-[#88C56C]'
                      } ${request.status === 'Waiting' && 'bg-[#F8B545]'} ${
                        request.status === 'Ready' && 'bg-green-900'
                      } px-3 py-2 text-white`}
                    >
                      {request.status}
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </section>
      <section className='hidden h-[100vh] flex-1 flex-col items-end xl:flex'>
        <div className='relative flex h-full w-full max-w-[256px] justify-center rounded-2xl bg-green-900 px-7 pt-[50px]'>
          <p className='text-center text-2xl text-white'>Print The Amount You Need</p>
          <img
            src={ForestBackground}
            alt='Forest Background'
            className='absolute bottom-0 left-0 h-[200px] rounded-es-2xl'
          />
          <img
            src={TreeBackground}
            alt='Tree Background'
            className='absolute bottom-0 right-0 h-[200px] rounded-ee-2xl'
          />
        </div>
      </section>
    </div>
  );
};

export default NewRequest;
