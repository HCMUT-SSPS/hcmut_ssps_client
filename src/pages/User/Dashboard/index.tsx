import { FC, useState } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

// import Chart from '../../../assets/svgs/Chart.svg?react';
import PerformanceChart from '../../../assets/svgs/PerformanceChart.svg?react';
import { Icon } from '../../../components';
import { Page } from '../../../layouts';

const UserDashboard: FC = () => {
  const [showMoney, setShowMoney] = useState(false);

  return (
    <Page title='Dashboard'>
      <div className='flex flex-col space-y-10 px-10 pb-10 pt-10 lg:flex-row lg:space-x-4 lg:space-y-0 lg:pb-0'>
        <section className='flex w-full flex-col lg:w-[70%]'>
          <div
            className='h-[280px] w-full rounded-3xl bg-cover p-[50px] shadow-[0px_1px_20px_0px_rgba(0,0,0,0.25)] xl:h-[320px] 2xl:h-[350px]'
            style={{
              backgroundImage: 'url(/src/assets/images/UserDashboard.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
            }}
          >
            <div className='w-fit text-white'>
              <h1 className='w-fit md:text-lg/tight xl:text-xl/tight 2xl:text-2xl/tight'>
                Welcome back,
              </h1>
              <h2 className='mt-1 w-fit font-semibold md:text-4xl/tight xl:text-5xl/tight 2xl:text-6xl/tight'>
                Khanh Nguyen
              </h2>
              <h3 className='mt-2 w-fit text-sm/tight xl:text-base/tight'>
                I hope that you are doing well, midterm coming soon!
              </h3>
            </div>
          </div>
          <div className='mt-4 flex flex-col space-y-2 xl:flex-row xl:space-x-4 xl:space-y-0'>
            <div className='flex w-full items-center space-x-3 rounded-xl bg-green-50 py-4 pl-4'>
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
                  <p className='text-[18px] font-semibold text-green-900'>
                    {!showMoney ? '11.000.000' : '********'}
                  </p>
                  <p className='text-[12px] font-semibold text-green-900'>VND</p>
                </div>
                <p className='text-[12px]'>Bank Account</p>
              </div>
              <button
                type='button'
                className='absolute bottom-0 right-4 z-10 flex h-full items-center text-gray-800'
                onClick={() => setShowMoney(!showMoney)}
              >
                <Icon.Eye.Opened
                  className={`h-auto w-6 transform-gpu duration-200 ${
                    showMoney ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <Icon.Eye.Closed
                  className={`absolute h-auto w-6 transform-gpu duration-200 ${
                    showMoney ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            </div>
            <div className='flex w-full items-center space-x-3 rounded-xl bg-green-50 py-4 pl-4'>
              <div className='flex h-[48px] w-[48px] items-center justify-center rounded-full bg-green-900'>
                <Icon.HourglassMedium className='h-6 w-6' />
              </div>
              <div>
                <p className='text-[18px] font-semibold text-green-900'>2</p>
                <p className='text-[12px]'>Request In Queue</p>
              </div>
            </div>
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
          </div>
        </section>
        <section className='flex flex-1 flex-col gap-y-4'>
          <div
            className='flex w-full flex-col items-center justify-center gap-y-5 
              rounded-3xl bg-orange-50 p-6'
          >
            <div className='flex w-full flex-col items-center gap-y-1'>
              <h1 className='text-center text-lg/tight font-semibold text-green-950'>
                My Transaction
              </h1>
              <h2 className='text-xs/tight font-normal'>since Dec 21, 2023</h2>
            </div>

            <div className='flex w-full flex-col items-center gap-y-3'>
              <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                <p className='text-sm/tight font-medium 2xl:text-base/tight'>Paper Sheets</p>
                <p className='h-fit text-end text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                  -72
                </p>
              </div>

              <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                <p className='text-sm/tight font-medium 2xl:text-base/tight'>Transation</p>
                <p className='h-fit text-end text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                  -45K
                </p>
              </div>

              <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                <p className='text-sm/tight font-medium 2xl:text-base/tight'>Request made</p>
                <p className='h-fit text-end text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                  10
                </p>
              </div>

              <div>
                <p className='text-[12px] text-gray-500'>*1k = 1.000VND</p>
              </div>
            </div>
          </div>

          <div
            className='flex w-full flex-col items-center justify-center gap-y-5 
              rounded-3xl bg-green-50 p-6'
          >
            <div className='flex w-full flex-col items-center gap-y-1'>
              <h1 className='text-center text-lg/tight font-semibold text-green-950'>
                My Total <br />
                Environmental Impact
              </h1>
              <h2 className='text-xs/tight font-normal'>since Dec 21, 2023</h2>
            </div>

            <div className='flex w-full flex-col items-center gap-y-3'>
              <div className='flex flex-row items-center gap-x-3'>
                <Icon.Thermometer className='aspect-square h-6 w-auto min-w-[24px] text-green-900' />
                <p className='h-fit text-sm/tight 2xl:text-base/tight'>56.4kg of CO2 emissions</p>
              </div>

              <div className='flex flex-row items-center gap-x-3'>
                <Icon.Leaf className='aspect-square h-6 w-auto min-w-[24px] text-green-900' />
                <p className='h-fit text-sm/tight 2xl:text-base/tight'>32+ trees were cut down</p>
              </div>

              <div className='flex flex-row items-center gap-x-3'>
                <Icon.Lightbulb className='aspect-square h-6 w-auto min-w-[24px] text-green-900' />
                <p className='h-fit text-sm/tight 2xl:text-base/tight'>1,234 hours of light bulb</p>
              </div>
            </div>
          </div>

          <div className='mt-10 flex w-full flex-col items-center justify-center gap-y-5 rounded-3xl px-4'>
            <h1 className='self-start text-start text-2xl/tight font-semibold text-green-950'>
              Usage Overview
            </h1>

            <PerformanceChart />
          </div>
        </section>
      </div>
    </Page>
  );
};

export default UserDashboard;
