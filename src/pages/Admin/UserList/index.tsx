import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { Icon } from '../../../components';
import { AdminsAccount, UsersAccount } from '../../../data/account';
import { Page } from '../../../layouts';

import { UsersList } from '../../../typings';

const UserList: FC = () => {
  const [isUser, setIsUser] = useState<boolean>(true);
  const [accounts, setAccounts] = useState<UsersList[]>(isUser ? UsersAccount : AdminsAccount);
  const navigate = useNavigate();

  return (
    <Page title='Logs'>
      <div className='pb-10'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>Users</h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>
        <div className='mt-6 flex px-10'>
          <button
            className={`${
              isUser ? 'border-green-900 text-green-700' : 'border-gray-200'
            } border-b-2 px-4 py-3`}
            onClick={() => {
              setIsUser(true);
              setAccounts(UsersAccount);
            }}
          >
            Users List
          </button>
          <button
            className={`${
              !isUser ? 'border-green-900 text-green-700' : 'border-gray-200'
            } border-b-2 px-4 py-3`}
            onClick={() => {
              setIsUser(false);
              setAccounts(AdminsAccount);
            }}
          >
            Admin List
          </button>
        </div>
        <div className='mt-10 flex flex-col space-y-10 px-10 lg:justify-between xl:flex-row xl:space-y-0'>
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
          <section className='w-[74%]'>
            <Table>
              <Thead className='text-xs/tight 2xl:text-sm/tight'>
                <Tr>
                  <Th>USERNAME</Th>
                  <Th>FULLNAME</Th>
                  <Th>PAGES</Th>
                  <Th>JOB PENDING</Th>
                  <Th>STATUS</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accounts.map((account, idx) => (
                  <Tr
                    onClick={() => {
                      if (isUser) navigate(`/admin/users/user/${idx}`);
                      else navigate(`/admin/users/admin/${idx}`);
                    }}
                    key={idx}
                    className='cursor-pointer text-[12px] text-gray-500 hover:bg-gray-50'
                  >
                    <Td
                      className={`font-medium ${
                        account.status === 'Offline'
                          ? 'text-[#F8B545]'
                          : account.status === 'Restricted' && 'text-[#F63B3B]'
                      }`}
                    >
                      {account.userName}
                    </Td>
                    <Td
                      className={`${
                        account.status === 'Offline'
                          ? 'text-[#F8B545]'
                          : account.status === 'Restricted' && 'text-[#F63B3B]'
                      }`}
                    >
                      {account.fullName}
                    </Td>
                    <Td
                      className={`${
                        account.status === 'Offline'
                          ? 'text-[#F8B545]'
                          : account.status === 'Restricted' && 'text-[#F63B3B]'
                      }`}
                    >
                      {account.status === 'Restricted' ? 'N/A' : account.pages + 'pages'}
                    </Td>
                    <Td
                      className={`${
                        account.status === 'Offline'
                          ? 'text-[#F8B545]'
                          : account.status === 'Restricted' && 'text-[#F63B3B]'
                      }`}
                    >
                      {account.jobPending}.
                    </Td>
                    <Td
                      className={`font-medium ${
                        account.status === 'Offline'
                          ? 'text-[#F8B545]'
                          : account.status === 'Restricted' && 'text-[#F63B3B]'
                      }`}
                    >
                      {account.status}
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

export default UserList;
