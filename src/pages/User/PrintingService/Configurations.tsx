import { FC, ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

import useBoundStore from '../../../store';

import StepIndicator from './StepIndicator';

interface ConfigurationsProps {
  setCurrentStep: (nextStep: number) => void;
}

const campus1Building: string[] = ['Building A4', 'Building B4', 'Building C6'];
const campus2Building: string[] = ['Building H1', 'Building H2', 'Building H6'];

const Configurations: FC<ConfigurationsProps> = ({ setCurrentStep }) => {
  const setConfig = useBoundStore.use.setConfig();
  const [curCampus, setCurCampus] = useState<string>('Campus 1');
  const [building, setBuilding] = useState<string>('Building A4');
  const [startDate, setStartDate] = useState<string>('');

  const handleCampusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurCampus(e.target.value);
  };

  const handleBuildingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBuilding(e.target.value);
  };

  const saveConfig = () => {
    if (!startDate) {
      toast.error('Please select a date and time');
      return;
    }
    const [date, time] = startDate.split('T');
    setCurrentStep(2);
    setConfig({
      campus: curCampus,
      printer: building,
      date,
      time,
    });
  };

  return (
    <div className='flex h-[100vh] flex-col p-10'>
      <h1 className='text-2xl font-semibold text-green-900'>Printing Service</h1>
      <StepIndicator currentStep={1} />
      <div className='mt-10 flex w-[360px] flex-col space-y-6'>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='campus' className='font-semibold text-gray-700'>
            Campus
          </label>
          <select
            id='campus'
            onChange={handleCampusChange}
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          >
            <option value='Campus 1'>Campus 1</option>
            <option value='Campus 2'>Campus 2</option>
          </select>
        </div>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='building' className='font-semibold text-gray-700'>
            Building
          </label>
          <select
            onChange={handleBuildingChange}
            id='building'
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          >
            {curCampus === 'Campus 1' &&
              campus1Building.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            {curCampus === 'Campus 2' &&
              campus2Building.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
          </select>
        </div>
        <div className='flex w-full flex-col space-y-[10px]'>
          <label htmlFor='time' className='font-semibold text-gray-700'>
            Date & Time
          </label>
          <input
            type='datetime-local'
            id='time'
            placeholder='Select input'
            onChange={(e) => setStartDate(e.target.value)}
            className='rounded-[6px] border-[1px] border-[#E5E7EB] px-4 py-3'
          />
        </div>
      </div>
      <div className='mt-[160px] flex space-x-3 self-end pb-10'>
        <button
          onClick={() => setCurrentStep(0)}
          className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'
        >
          Previous Step
        </button>
        <button onClick={saveConfig} className='rounded-lg bg-green-900 px-6 py-2 text-white'>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Configurations;
