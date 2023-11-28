import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import Chart from '../../../assets/svgs/Chart.svg?react';
import PerformanceChart from '../../../assets/svgs/PerformanceChart.svg?react';
import { Icon } from '../../../components';
import { Page } from '../../../layouts';

const Dashboard: FC = () => {
  return (
    <Page title='Dashboard'>
      <div className='flex w-full flex-col'>
        <div
          className='relative flex h-auto w-full justify-start overflow-hidden bg-[#064635] px-10 pb-12 
          pt-8 shadow-[0px_1px_20px_0px_rgba(0,0,0,0.25)]'
          style={{
            backgroundImage: 'url(/src/assets/images/Background.png)',
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
              Le Ba Tan
            </h2>
            <h3 className='mt-2 w-fit text-sm/tight xl:text-base/tight'>
              "Don't let yesterday take up too much of today." - Will Rogers
            </h3>
          </div>
        </div>

        <main className='flex w-full flex-1 flex-row flex-wrap gap-x-6 p-10'>
          <section className='flex flex-1 flex-col justify-between gap-y-4'>
            <div
              className='flex w-full flex-col items-center justify-center gap-y-5 
              rounded-3xl bg-orange-50 p-6'
            >
              <div className='flex w-full flex-col items-center gap-y-1'>
                <h1 className='text-center text-lg/tight font-semibold text-green-950'>
                  System Status
                </h1>
                <h2 className='text-xs/tight font-normal'>since Jun 2, 2023</h2>
              </div>

              <div className='flex w-full flex-col items-center gap-y-3'>
                <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Errors</p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-red-500 2xl:text-base/tight'>
                    10
                  </p>
                </div>

                <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Warnings</p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                    20
                  </p>
                </div>

                <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>System Uptime</p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    234 hrs
                  </p>
                </div>

                <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Users</p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    1023
                  </p>
                </div>

                <div className='flex w-full flex-row items-center  justify-between gap-x-3'>
                  <p className='text-sm/tight font-medium 2xl:text-base/tight'>Printers</p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-green-950 2xl:text-base/tight'>
                    10
                  </p>
                </div>

                <div className='flex w-full flex-row items-center justify-between gap-x-3'>
                  <p className='h-fit text-sm/tight font-medium 2xl:text-base/tight'>
                    Pending Requests
                  </p>
                  <p className='h-fit text-end text-sm/tight font-semibold text-[#F8B545] 2xl:text-base/tight'>
                    23
                  </p>
                </div>
              </div>
            </div>

            <div
              className='flex w-full flex-col items-center justify-center gap-y-5 
              rounded-3xl bg-green-50 p-6'
            >
              <div className='flex w-full flex-col items-center gap-y-1'>
                <h1 className='text-center text-lg/tight font-semibold text-green-950'>
                  Environmental Impact
                </h1>
                <h2 className='text-xs/tight font-normal'>since Jun 2, 2023</h2>
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
                  <p className='h-fit text-sm/tight 2xl:text-base/tight'>
                    1,234 hours of light bulb
                  </p>
                </div>
              </div>
            </div>

            <div className='flex w-full flex-col items-center justify-center gap-y-5 rounded-3xl px-4'>
              <h1 className='text-center text-lg/tight font-semibold text-green-950'>
                Usage Overview
              </h1>

              <PerformanceChart />
            </div>
          </section>

          <section className='flex flex-[3.2] flex-col gap-y-10'>
            <div className='flex flex-1 flex-col gap-y-4'>
              <h1 className='text-xl/tight font-semibold text-green-900 2xl:text-2xl/tight'>
                Pages Printed (This month)
              </h1>

              <Chart className='aspect-auto h-auto w-full object-cover' />
            </div>

            <div className='flex flex-1 flex-col gap-y-4'>
              <div className='flex flex-row items-center justify-between'>
                <h1 className='text-xl/tight font-semibold text-green-900 2xl:text-2xl/tight'>
                  Printers Status
                </h1>
                <Link to='/admin/printers' className='text-sm/tight 2xl:text-base/tight'>
                  See details
                </Link>
              </div>

              <Table>
                <Thead className='text-xs/tight 2xl:text-sm/tight'>
                  <Tr>
                    <Th className='uppercase'>Printer ID</Th>
                    <Th className='uppercase'>Location</Th>
                    <Th className='uppercase'>Latest uptime</Th>
                    <Th className='uppercase'>Printed Today</Th>
                    <Th className='uppercase'>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>bk_server_1_a4_1a</Td>
                    <Td>Room A605, Building A4</Td>
                    <Td>32d40m</Td>
                    <Td>20 pages</Td>
                    <Td className='font-semibold text-[#88C56C]'>Online</Td>
                  </Tr>
                  <Tr>
                    <Td>bk_server_1_a4_1b</Td>
                    <Td>Room A605, Building A4</Td>
                    <Td>32d40m</Td>
                    <Td>12 pages</Td>
                    <Td className='font-semibold text-[#88C56C]'>Online</Td>
                  </Tr>
                  <Tr>
                    <Td className='text-[#F63B3B]'>bk_server_2_c5_1c</Td>
                    <Td className='text-[#F63B3B]'>Room C213, Building C5</Td>
                    <Td className='text-[#F63B3B]'>2d40m</Td>
                    <Td>N/A</Td>
                    <Td className='font-semibold text-[#F63B3B]'>Offline</Td>
                  </Tr>
                  <Tr>
                    <Td>bk_server_3_b5_1d</Td>
                    <Td>Room B212, Building B5</Td>
                    <Td>100d23m</Td>
                    <Td>100 pages</Td>
                    <Td className='font-semibold text-[#88C56C]'>Online</Td>
                  </Tr>
                  <Tr>
                    <Td className='text-[#F63B3B]'>bk_server_4_c6_1a</Td>
                    <Td className='text-[#F63B3B]'>Room C601, Building C6</Td>
                    <Td className='text-[#F63B3B]'>2d40m</Td>
                    <Td>N/A</Td>
                    <Td className='font-semibold text-[#F63B3B]'>Offline</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </section>
        </main>
      </div>
    </Page>
  );
};

export default Dashboard;