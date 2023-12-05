import { FC, useState } from 'react';

import HeaderBackground from '../../../assets/images/HeaderBackground.png';
import { Page } from '../../../layouts';

import Printer from './Printer';
import User from './User';

const Reports: FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Page title='Reports'>
      <div className='flex w-full flex-col'>
        <nav className='relative w-full bg-green-900'>
          <h1 className='select-none px-10 py-5 text-2xl/normal font-semibold text-white'>
            Reports
          </h1>
          <img className='absolute right-0 top-0 h-full w-auto' src={HeaderBackground} />
        </nav>
      </div>

      <main className='flex flex-col gap-y-6 p-10'>
        <div role='tablist' className='tabs tabs-bordered tabs-lg w-fit'>
          <button
            className={`tab text-base/normal font-medium text-green-900 [--tab-border-color:rgb(20,83,45)] ${
              tabIndex === 0 ? 'tab-active' : ''
            }`}
            onClick={() => setTabIndex(0)}
          >
            User Report
          </button>
          <button
            className={`tab text-base/normal font-medium text-green-900 [--tab-border-color:rgb(20,83,45)] ${
              tabIndex === 1 ? 'tab-active' : ''
            }`}
            onClick={() => setTabIndex(1)}
          >
            Printer Report
          </button>
        </div>

        {tabIndex === 0 ? <User /> : <Printer />}
      </main>
    </Page>
  );
};

export default Reports;
