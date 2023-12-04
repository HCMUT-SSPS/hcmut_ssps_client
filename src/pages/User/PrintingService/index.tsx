import { FC } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import ForestBackground from '../../../assets/images/ForestBackground.png';
import TreeBackground from '../../../assets/images/TreeBackground.png';
import { Icon } from '../../../components';
import { Page } from '../../../layouts';

const PrintingService: FC = () => {
  return (
    <Page title='Printing'>
      <div className='flex space-x-4 px-10 py-10'>
        <section className='flex w-full flex-col xl:w-[78%]'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
            <p className='mt-2 max-w-[640px]'>
              Printing Service is a service to enable printing for laptop, wireless and
              unauthenticated users without the need to install print drivers. To upload a document
              for printing, click Submit a Request.
            </p>
            <button className='mt-6 flex w-fit items-center space-x-2 rounded-lg bg-green-900 px-10 py-4'>
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
                <Tr className='text-[12px] text-gray-500'>
                  <Td>
                    Oct 24, 2023
                    <br />
                    7:35:16 PM
                  </Td>
                  <Td>
                    Room 602, A4
                    <br />
                    D10 Campus
                  </Td>
                  <Td>25</Td>
                  <Td>Computer Network Documents Slides...</Td>
                  <Td>A4 (ISO_A4) Duplex: No...</Td>
                  <Td>
                    8:00 PM
                    <br />
                    Dec 23, 2023
                  </Td>
                  <Td>
                    <div className='rounded-[4px] bg-green-900 px-3 py-2 text-white'>Ready</div>
                  </Td>
                </Tr>
                <Tr className='text-[12px] text-gray-500'>
                  <Td>
                    Oct 24, 2023
                    <br />
                    7:35:16 PM
                  </Td>
                  <Td>
                    Room 602, A4
                    <br />
                    D10 Campus
                  </Td>
                  <Td>25</Td>
                  <Td>Computer Network Documents Slides In Class Lorem Ipsum Lorem Ipsum.pdf</Td>
                  <Td>A4 (ISO_A4) Duplex: No Grayscale: No 834 kB client-workstation PostScript</Td>
                  <Td>
                    8:00 PM
                    <br />
                    Dec 23, 2023
                  </Td>
                  <Td>
                    <div className='rounded-[4px] bg-[#F8B545] px-3 py-2 text-white'>Waiting</div>
                  </Td>
                </Tr>
                <Tr className='text-[12px] text-gray-500'>
                  <Td>
                    Oct 24, 2023
                    <br />
                    7:35:16 PM
                  </Td>
                  <Td>
                    Room 602, A4
                    <br />
                    D10 Campus
                  </Td>
                  <Td>25</Td>
                  <Td>Computer Network Documents Slides...</Td>
                  <Td>A4 (ISO_A4) Duplex: No...</Td>
                  <Td>
                    8:00 PM
                    <br />
                    Dec 23, 2023
                  </Td>
                  <Td>
                    <div className='rounded-[4px] bg-[#88C56C] px-3 py-2 text-white'>Printing</div>
                  </Td>
                </Tr>
                <Tr className='text-[12px] text-gray-500'>
                  <Td>
                    Oct 24, 2023
                    <br />
                    7:35:16 PM
                  </Td>
                  <Td>
                    Room 602, A4
                    <br />
                    D10 Campus
                  </Td>
                  <Td>25</Td>
                  <Td>Computer Network Documents Slides In Class Lorem Ipsum Lorem Ipsum.pdf</Td>
                  <Td>A4 (ISO_A4) Duplex: No Grayscale: No 834 kB client-workstation PostScript</Td>
                  <Td>
                    8:00 PM
                    <br />
                    Dec 23, 2023
                  </Td>
                  <Td>
                    <div className='rounded-[4px] bg-[#F8B545] px-3 py-2 text-white'>Waiting</div>
                  </Td>
                </Tr>
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
    </Page>
  );
};

export default PrintingService;
