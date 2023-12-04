import { FC } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import { Icon } from '../../../components';
import { Page } from '../../../layouts';

const ActivityLogs: FC = () => {
  return (
    <Page title='Logs'>
      <div className='p-10'>
        <h1 className='text-2xl font-semibold text-green-900'>Activity Logs</h1>
        <div className='mt-10 flex flex-col space-y-10 lg:space-x-6 xl:flex-row xl:space-y-0'>
          <section className='flex flex-col rounded-xl bg-green-50 p-4 pb-5 xl:w-[24%]'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-gray-700'>Filter</h2>
              <button className='text-[12px]'>Clear all</button>
            </div>
            <div className='mt-5 flex items-center space-x-2 rounded-[6px] border-[1px] border-[#E5E7EB] bg-white px-3'>
              <Icon.MagnifyingGlass className='h-4 w-4' />
              <input type='text' placeholder='Search' className='py-[10px] text-[12px]' />
            </div>
            <div className='mt-4 flex flex-col space-y-[14px] 2xl:flex-row 2xl:space-x-1 2xl:space-y-0'>
              <div className='flex w-full flex-col space-y-[6px]'>
                <label htmlFor='start-date' className='font-semibold text-gray-700'>
                  From Date
                </label>
                <input
                  type='date'
                  id='start-date'
                  className='rounded-[6px] border-[1px] border-[#E5E7EB] p-2 text-[12px]'
                />
              </div>
              <div className='flex w-full flex-col space-y-[6px]'>
                <label htmlFor='end-date' className='font-semibold text-gray-700'>
                  To Date
                </label>
                <input
                  type='date'
                  id='end-date'
                  className='rounded-[6px] border-[1px] border-[#E5E7EB] p-2 text-[12px]'
                />
              </div>
            </div>
            <div className='mt-[14px] flex w-full flex-col space-y-[6px]'>
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
            <div className='mt-[14px] flex w-full flex-col space-y-[6px]'>
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
            <div className='mt-[14px] flex w-full flex-col space-y-[6px]'>
              <label htmlFor='status' className='font-semibold text-gray-700'>
                Status
              </label>
              <input
                type='text'
                id='status'
                placeholder='Select input'
                className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
              />
            </div>
            <button className='mt-6 self-end rounded-lg bg-green-900 px-7 py-2 font-semibold text-white'>
              Proceed
            </button>
          </section>
          <section>
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
                    <div className='flex items-center justify-center rounded-[4px] bg-green-900 px-3 py-2 text-white'>
                      Ready
                    </div>
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
                    <div className='flex items-center justify-center rounded-[4px] bg-[#F8B545] px-3 py-2 text-white'>
                      Waiting
                    </div>
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
                    <div className='flex items-center justify-center rounded-[4px] bg-[#88C56C] px-3 py-2 text-white'>
                      Printing
                    </div>
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
                    <div className='flex items-center justify-center rounded-[4px] bg-[#F8B545] px-3 py-2 text-white'>
                      Waiting
                    </div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default ActivityLogs;
