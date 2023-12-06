import { FC, useState } from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import { Icon } from '../../../components';
import { Requests } from '../../../data/request';
import { useStorage } from '../../../hooks';
import { Page } from '../../../layouts';
import { Request } from '../../../typings/request';

const campus1Building: string[] = ['Building A4', 'Building B4', 'Building C6'];
const campus2Building: string[] = ['Building H1', 'Building H2', 'Building H6'];

const ActivityLogs: FC = () => {
  const [localRequest] = useStorage<Request[]>('request', []);
  const [requestList] = useState<Request[]>([...Requests, ...localRequest]);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });
  const [campusFilter, setCampusFilter] = useState<string>('All');
  const [buildingFilter, setBuildingFilter] = useState<string>('All');

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
            <div className='mt-5 flex items-center space-x-2 rounded-[6px] border-[1px] border-[#E5E7EB] bg-white pl-3'>
              <Icon.MagnifyingGlass className='h-4 w-4' />
              <input
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                type='text'
                placeholder='Search'
                className='w-full py-[10px] text-[12px]'
              />
            </div>
            <div className='mt-4 flex flex-col space-y-[14px] 2xl:flex-row 2xl:space-x-1 2xl:space-y-0'>
              <div className='flex w-full flex-col space-y-[6px]'>
                <label htmlFor='start-date' className='font-semibold text-gray-700'>
                  From Date
                </label>
                <input
                  type='date'
                  id='start-date'
                  value={dateFilter.start}
                  onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
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
                  value={dateFilter.end}
                  onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
                  className='rounded-[6px] border-[1px] border-[#E5E7EB] p-2 text-[12px]'
                />
              </div>
            </div>
            <div className='mt-[14px] flex w-full flex-col space-y-[6px]'>
              <label htmlFor='campus' className='font-semibold text-gray-700'>
                Campus
              </label>
              <select
                id='campus'
                value={campusFilter}
                onChange={(e) => setCampusFilter(e.target.value)}
                className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
              >
                <option value='All'>All</option>
                <option value='Campus 1'>Campus 1</option>
                <option value='Campus 2'>Campus 2</option>
              </select>
            </div>
            <div className='mt-[14px] flex w-full flex-col space-y-[6px]'>
              <label htmlFor='building' className='font-semibold text-gray-700'>
                Building
              </label>
              <select
                id='building'
                value={buildingFilter}
                onChange={(e) => setBuildingFilter(e.target.value)}
                className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
              >
                {campusFilter === 'Campus 1' ||
                  (campusFilter === 'All' &&
                    campus1Building.map((el) => (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    )))}
                {campusFilter === 'Campus 2' ||
                  (campusFilter === 'All' &&
                    campus2Building.map((el) => (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    )))}
              </select>
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
                {requestList.map((request, idx) => (
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
          </section>
        </div>
      </div>
    </Page>
  );
};

export default ActivityLogs;
