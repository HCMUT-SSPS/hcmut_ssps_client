import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import { Table, Thead, Tr, Th, Tbody, Td } from 'react-super-responsive-table';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { Icon } from '../../../components';
import { Page } from '../../../layouts';
import { formatUptime } from '../../../utils';
import { axios } from '../../../utils/customAxios';

import { Printer, PrinterStatus } from '../../../typings';

const Printers: FC = () => {
  const [printers, setPrinters] = useState<Printer[]>([]);
  const [currentPrinterId, setCurrentPrinterId] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<Printer[]>('/printers', {})
      .then((res) => {
        setPrinters(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const currentPrinter = printers.find((printer) => printer.id === currentPrinterId);

  const handleSearch = async (value: string) => {
    setPage(1);
    setCurrentPrinterId(null);

    try {
      const { data } = await axios.get<Printer[]>('/printers', {
        params: {
          q: value,
        },
      });

      setPrinters(data);
    } catch {
      console.error('Error while searching');
      setPrinters([]);
    }
  };

  const handleToggle = useCallback(async () => {
    if (!currentPrinter) return;
    try {
      setIsDisabled(true);
      const { data } = await axios.put<Printer>(`/printers/${currentPrinter.id}`, {
        ...currentPrinter,
        status:
          currentPrinter.status === PrinterStatus.ONLINE
            ? PrinterStatus.OFFLINE
            : PrinterStatus.ONLINE,
      });
      setPrinters((prev) => prev.map((printer) => (printer.id === data.id ? data : printer)));
    } catch {
      console.error('Error while toggling');
    } finally {
      setIsDisabled(false);
    }
  }, [currentPrinter]);

  const debouncedHandleSearch = useRef(debounce(handleSearch, 500)).current;

  const printersList = printers.slice((page - 1) * 6, page * 6);
  const totalPages = Math.ceil(printers.length / 6 || 1);

  return (
    <Page title='Printers'>
      <div className='flex w-full flex-col'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='px-10 py-5 text-2xl/normal font-semibold text-white'>Printers List</h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>

        <main className='flex min-h-full w-full flex-col gap-y-6 p-10'>
          <Link to='/admin/printers/add' className='block w-fit rounded-lg bg-green-900 px-10 py-5'>
            <p className='text-base/normal font-semibold text-white'>Add Printer</p>
          </Link>

          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col gap-y-3'>
              <label
                htmlFor='printer-finder'
                className='text-sm/normal font-semibold text-[#1F2937]'
              >
                Quick find
              </label>

              <div className='relative'>
                <input
                  id='printer-finder'
                  placeholder='Enter the info'
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    void debouncedHandleSearch(e.target.value);
                  }}
                  className='w-[400px] rounded-lg border border-[#6B7280] p-4 pl-12 text-base/normal'
                />
                <Icon.MagnifyingGlass className='absolute left-4 top-4 h-6 w-auto text-[#6B7280]' />
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <button
                className='w-fit p-5'
                onClick={() => setPage((prev) => (prev <= 1 ? prev : prev - 1))}
              >
                <Icon.ChevronDouble className='h-auto w-4 -rotate-90' />
              </button>
              <div className='flex flex-row items-center gap-x-3'>
                <input
                  type='text'
                  id='page-input'
                  value={page}
                  inputMode='numeric'
                  onChange={(e) => setPage(Number(e.target.value))}
                  onBlur={() => {
                    if (page < 1) {
                      setPage(1);
                    } else if (page > totalPages) {
                      setPage(totalPages);
                    }
                  }}
                  className='h-10 w-10 appearance-none rounded-lg border border-[#E5E7EB] text-center text-base/normal 
                  font-medium text-[#6B7280]'
                />
                <label
                  htmlFor='page-input'
                  className='flex flex-row items-center gap-x-3 font-medium'
                >
                  <span>of</span>
                  <span>{totalPages}</span>
                </label>
              </div>
              <button
                className='w-fit p-5'
                onClick={() =>
                  setPage((prev) => (prev >= Math.ceil(printers.length / 6) ? prev : prev + 1))
                }
              >
                <Icon.ChevronDouble className='h-auto w-4 rotate-90' />
              </button>
            </div>
          </div>

          <Table>
            <Thead className='text-xs/tight 2xl:text-sm/tight'>
              <Tr>
                <Th className='whitespace-nowrap uppercase'>Printer ID</Th>
                <Th className='w-[200px] whitespace-nowrap uppercase'>Printer Info</Th>
                <Th className='whitespace-nowrap uppercase'>Address</Th>
                <Th className='whitespace-nowrap uppercase'>Latest uptime</Th>
                <Th className='whitespace-nowrap uppercase'>On Queue</Th>
                <Th className='whitespace-nowrap uppercase'>Total Printed</Th>
                <Th className='whitespace-nowrap uppercase'>Printed Today</Th>
                <Th className='whitespace-nowrap uppercase'>Status</Th>
              </Tr>
            </Thead>
            {printersList.length === 0 ? null : (
              <Tbody>
                {printersList.map((printer) => (
                  <Tr
                    key={printer.id}
                    className='font-extralight text-[#1F2937]'
                    onClick={() => setCurrentPrinterId(printer.id)}
                  >
                    <Td
                      className={printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''}
                    >
                      {printer.printerId}
                    </Td>
                    <Td
                      className={`max-w-[200px] truncate whitespace-nowrap ${
                        printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''
                      }`}
                    >
                      {printer.name}
                    </Td>
                    <Td
                      className={`whitespace-nowrap ${
                        printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''
                      }`}
                    >
                      {printer.address}
                    </Td>
                    <Td
                      className={printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''}
                    >
                      {formatUptime(Date.now() - printer.startedAt)}
                    </Td>
                    <Td
                      className={printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''}
                    >
                      {printer.onQueue || 'N/A'}
                    </Td>
                    <Td
                      className={printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''}
                    >
                      {printer.totalPrinted || 'N/A'}
                    </Td>
                    <Td
                      className={printer.status === PrinterStatus.OFFLINE ? 'text-[#F63B3B]' : ''}
                    >
                      {printer.printedToday || 'N/A'}
                    </Td>
                    <Td
                      className={`font-semibold ${
                        printer.status === PrinterStatus.ONLINE
                          ? 'text-[#88C56C]'
                          : 'text-[#F63B3B]'
                      }`}
                    >
                      {printer.status}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            )}
          </Table>
          {printersList.length === 0 ? (
            <div className='flex h-[270px] w-full items-center justify-center'>
              <p className='text-xl/normal font-bold'>No printers found!</p>
            </div>
          ) : null}

          <div className='flex flex-col gap-y-6'>
            <h2 className='text-2xl/normal font-semibold text-green-900'>
              Printers Info & Settings
            </h2>
            {!currentPrinter ? (
              <p>Select a printer</p>
            ) : (
              <div className='flex flex-row gap-x-2'>
                <div className='grid w-fit grid-cols-[repeat(2,max-content)] border border-[#E5E7EB]'>
                  <h3 className='border-b border-b-[#E5E7EB] bg-green-900 px-5 py-3 text-xs/normal font-medium text-white'>
                    ATTRIBUTE
                  </h3>
                  <h3 className='border-b border-b-[#E5E7EB] bg-green-900 px-5 py-3 text-xs/normal font-medium text-white'>
                    VALUE
                  </h3>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Printer ID
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    {currentPrinter.printerId}
                  </p>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Printer Info
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    {currentPrinter.name}
                  </p>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Address
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    {currentPrinter.address}
                  </p>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Latest uptime
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    {formatUptime(Date.now() - currentPrinter.startedAt)}
                  </p>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Ink Information
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    1000ml Dtf Ink Transfer Film Printing Ink Dtf Ink
                  </p>
                  <h4 className='border-b border-b-[#E5E7EB] bg-green-900/20 px-5 py-3 font-medium text-green-900'>
                    Paper Slot
                  </h4>
                  <p className='border-b border-b-[#E5E7EB] bg-white px-5 py-3 text-green-900'>
                    {currentPrinter.paperSlot}
                  </p>
                </div>

                <div className='flex flex-row items-center gap-x-4'>
                  <input
                    type='checkbox'
                    className={`toggle toggle-lg bg-white text-white ${
                      currentPrinter.status === PrinterStatus.ONLINE
                        ? '[--tglbg:rgb(20_83_45/var(--tw-bg-opacity))]'
                        : '[--tglbg:rgb(107_114_128/var(--tw-bg-opacity))]'
                    }`}
                    disabled={isDisabled}
                    checked={currentPrinter.status === PrinterStatus.ONLINE}
                    onChange={() => void handleToggle()}
                  />
                  <div>
                    <p className='text-lg/normal font-medium text-green-900'>
                      Enable/Disable Printer
                    </p>
                    <p className='text-base/normal'>Beware of the request(s) processed on queue.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Printers;
