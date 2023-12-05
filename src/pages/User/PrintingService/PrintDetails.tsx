import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import TestFile from '../../../assets/CC03_Trần Duy Minh_2152773.pdf';
import Pdf from '../../../components/PDF';
import useBoundStore from '../../../store';

import StepIndicator from './StepIndicator';

interface PrintDetailsProps {
  file: File | string;
  setCurrentStep: (nextStep: number) => void;
}

const PrintDetails: FC<PrintDetailsProps> = ({ file, setCurrentStep }) => {
  const setDetails = useBoundStore.use.setDetails();
  const [pageRange, setPageRange] = useState<string>('');
  const [copies, setCopies] = useState<number>(1);
  const [orientation, setOrientation] = useState<string>('Portrait');
  const [paperSize, setPaperSize] = useState<string>('A4');
  const [printSides, setPrintSides] = useState<string>('Single-sided');
  const [color, setColor] = useState<string>('Black & White');

  const isValidPageRange = () => {
    if (!pageRange) return false;
    const regex = /^\d+-\d+$/;

    return regex.test(pageRange);
  };

  const saveDetails = () => {
    if (!isValidPageRange()) {
      toast.error('Invalid page range');
      return;
    }
    setCurrentStep(3);
    setDetails({
      pageRange,
      copies,
      orientation,
      paperSize,
      printSides,
      color,
    });
  };

  return (
    <div className='flex h-[100vh] flex-col p-10'>
      <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
      <StepIndicator currentStep={2} />
      <div className='mt-10 flex w-full space-x-10'>
        <section className='show-scrollbar max-h-[100vh] w-[50%] overflow-auto lg:w-[60%]'>
          <Pdf
            file={file ?? TestFile}
            title={'test'}
            pageClassName='border border-[#bbbcbc] shadow'
          />
        </section>
        <section className='w-[40%] lg:w-[30%]'>
          <h2 className='text-xl font-semibold text-gray-700'>Page Range</h2>
          <div className='mt-4 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='page-range' className='font-semibold text-gray-700'>
              Page Range
            </label>
            <input
              type='text'
              id='page-range'
              onChange={(e) => setPageRange(e.target.value)}
              value={pageRange}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
            <p className='text-[13px]'>For example: 1; 2-12; 3-6,12-21;...</p>
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='copies' className='font-semibold text-gray-700'>
              No of Copies
            </label>
            <input
              type='number'
              id='copies'
              value={copies}
              onChange={(e) => setCopies(parseInt(e.target.value))}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            />
          </div>
          <h2 className='mt-10 text-xl font-semibold text-gray-700'>Document Settings</h2>
          <div className='mt-4 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='orientation' className='font-semibold text-gray-700'>
              Orientation
            </label>
            <select
              id='orientation'
              placeholder='Portrait'
              onChange={(e) => setOrientation(e.target.value)}
              value={orientation}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            >
              <option value='Portrait'>Portrait</option>
              <option value='Landscape'>Landscape</option>
            </select>
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='size' className='font-semibold text-gray-700'>
              Paper Size
            </label>
            <select
              id='size'
              placeholder='A4'
              onChange={(e) => setPaperSize(e.target.value)}
              value={paperSize}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            >
              <option value='A4'>A4</option>
              <option value='A3'>A3</option>
              <option value='A4'>A2</option>
              <option value='A3'>A1</option>
              <option value='A3'>A0</option>
            </select>
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='print-side' className='font-semibold text-gray-700'>
              Print Sides
            </label>
            <select
              id='print-side'
              placeholder='Single-sided'
              value={printSides}
              onChange={(e) => setPrintSides(e.target.value)}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            >
              <option value='Single-sided'>Single-sided</option>
              <option value='Double-sided'>Double-sided</option>
            </select>
          </div>
          <div className='mt-6 flex w-full flex-col space-y-[10px]'>
            <label htmlFor='color' className='font-semibold text-gray-700'>
              Print In
            </label>
            <select
              id='color'
              placeholder='Black & White'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
            >
              <option value='Black & White'>Black & White</option>
              <option value='Color'>Color</option>
            </select>
          </div>
          <div className='mt-10 flex w-full justify-end space-x-3 self-end pb-10'>
            <button
              onClick={() => setCurrentStep(1)}
              className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'
            >
              Previous Step
            </button>
            <button onClick={saveDetails} className='rounded-lg bg-green-900 px-6 py-2 text-white'>
              Next Step
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrintDetails;
