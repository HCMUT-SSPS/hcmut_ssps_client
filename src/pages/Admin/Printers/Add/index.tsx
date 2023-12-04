import { FC, FormEvent, useState } from 'react';
import { findLastIndex, max } from 'lodash';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import db from '../../../../../db.json';
import HeaderBackground from '../../../../assets/images/HeaderBackground.png';
import { PrinterBrands } from '../../../../data/printerBrands';
import { Page } from '../../../../layouts';
import { axios } from '../../../../utils/customAxios';

import './index.css';

import { PrinterStatus } from '../../../../typings';

const AddPrinter: FC = () => {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    address: '',
    paperSlot: 0,
    function: {
      scan: false,
      sizeVariety: false,
      color: false,
      doubleSided: false,
    },
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddPrinter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const generatePrinterId = () => {
      const addressIndex = findLastIndex(
        db.printers,
        (printer) => printer.address === form.address
      );

      if (addressIndex === -1) {
        const number = Number(db.printers[db.printers.length - 1].printerId.split('_')[-2]) + 1;
        return `bk_server_${number}_${number}a`;
      } else {
        const id = db.printers[addressIndex].printerId.split('_')[3];
        if (id[1] === 'z') {
          return db.printers[addressIndex].printerId.replace(id, `${Number(id[0]) + 1}a`);
        }

        return db.printers[addressIndex].printerId.replace(
          id,
          `${id[0]}${String.fromCharCode(id[1].charCodeAt(0) + 1)}`
        );
      }
    };

    setIsDisabled(true);
    try {
      await axios.post('/printers', {
        id: (max(db.printers.map((printer) => printer.id)) ?? 0) + 1,
        name: form.brand + ' ' + form.model,
        address: form.address,
        paperSlot: 0,
        printerId: generatePrinterId(),
        onQueue: 0,
        totalPrinted: 0,
        printedToday: 0,
        startedAt: Date.now(),
        status: PrinterStatus.ONLINE,
      });
      setForm({
        brand: '',
        model: '',
        address: '',
        paperSlot: 0,
        function: {
          scan: false,
          sizeVariety: false,
          color: false,
          doubleSided: false,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <Page title='Add Printer'>
      <div className='flex w-full flex-col'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>
            <Link to='/admin/printers'>Printers List</Link> {'>'} Add Printer
          </h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>
      </div>

      <main className='space-y-6 p-10'>
        <h2 className='text-xl/normal font-semibold text-[#1F2937]'>Printer Information</h2>
        <form
          className='flex min-h-full flex-col items-center justify-between gap-y-20'
          onSubmit={(e) => void handleAddPrinter(e)}
        >
          <div className='flex w-full flex-row justify-between'>
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='brand' className='text-base/normal font-semibold text-[#1F2937]'>
                  Printer Brand
                </label>
                <Select
                  id='brand'
                  required
                  isDisabled={isDisabled}
                  options={PrinterBrands.map((brand) => ({ value: brand, label: brand }))}
                  className='w-[500px]'
                  value={form.brand === '' ? null : { value: form.brand, label: form.brand }}
                  onChange={(e) => setForm({ ...form, brand: e?.value ?? '' })}
                  placeholder='Select Printer Brand...'
                  classNames={{
                    control: () => 'px-4 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]',
                    singleValue: () => 'text-base/normal font-medium text-[#6B7280]',
                  }}
                  classNamePrefix={'brand-select'}
                  menuPlacement='auto'
                />
              </div>

              <div className='flex flex-col gap-y-2'>
                <label
                  htmlFor='printer-info'
                  className='text-base/normal font-semibold text-[#1F2937]'
                >
                  Printer Info
                </label>
                <input
                  id='printer-info'
                  required
                  disabled={isDisabled}
                  type='text'
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  className='medium rounded-lg border border-[#E5E7EB] px-4 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]'
                  placeholder='Printer Model (LaserJet 1020, etc.)...'
                />
              </div>

              <div className='flex flex-col gap-y-2'>
                <label
                  htmlFor='printer-address'
                  className='text-base/normal font-semibold text-[#1F2937]'
                >
                  Address
                </label>
                <input
                  id='printer-address'
                  required
                  disabled={isDisabled}
                  type='text'
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className='medium rounded-lg border border-[#E5E7EB] px-4 py-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]'
                  placeholder='Printer Address (Room 305, Building A5; etc.)...'
                />
              </div>
            </div>

            <div className='flex w-[360px] flex-col gap-y-4'>
              <h3 className='text-base/normal font-semibold text-[#1F2937]'>Function</h3>
              <div className='flex flex-col gap-y-3 px-3'>
                <div className='flex flex-row items-center gap-x-2'>
                  <input
                    id='size-variety-function'
                    type='checkbox'
                    checked={form.function.sizeVariety}
                    onChange={() =>
                      setForm({
                        ...form,
                        function: { ...form.function, sizeVariety: !form.function.sizeVariety },
                      })
                    }
                  />
                  <label htmlFor='size-variety-function' className='font-medium text-[#1F2937]'>
                    Size variety
                  </label>
                </div>

                <div className='flex flex-row items-center gap-x-2'>
                  <input
                    id='double-sided-function'
                    type='checkbox'
                    checked={form.function.doubleSided}
                    onChange={() =>
                      setForm({
                        ...form,
                        function: { ...form.function, doubleSided: !form.function.doubleSided },
                      })
                    }
                  />
                  <label htmlFor='double-sided-function' className='font-medium text-[#1F2937]'>
                    Double Sided
                  </label>
                </div>

                <div className='flex flex-row items-center gap-x-2'>
                  <input
                    id='color-printing-function'
                    type='checkbox'
                    checked={form.function.color}
                    onChange={() =>
                      setForm({
                        ...form,
                        function: { ...form.function, color: !form.function.color },
                      })
                    }
                  />
                  <label htmlFor='color-printing-function' className='font-medium text-[#1F2937]'>
                    Color Printing
                  </label>
                </div>

                <div className='flex flex-row items-center gap-x-2'>
                  <input
                    id='scan-function'
                    type='checkbox'
                    checked={form.function.scan}
                    onChange={() =>
                      setForm({
                        ...form,
                        function: { ...form.function, scan: !form.function.scan },
                      })
                    }
                  />
                  <label htmlFor='scan-function' className='font-medium text-[#1F2937]'>
                    Scanning
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='w-fit rounded-lg bg-green-900 px-10 py-4 font-semibold text-white disabled:opacity-80'
          >
            Add Printer
          </button>
        </form>
      </main>
    </Page>
  );
};

export default AddPrinter;
