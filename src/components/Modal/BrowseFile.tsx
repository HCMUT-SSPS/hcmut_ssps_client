import { FC } from 'react';

import { Icon } from '..';
import BrowseImg from '../../assets/images/BrowseImg.png';

interface BrowseFileProps {
  show: boolean;
  onClose: () => void;
}

const BrowseFile: FC<BrowseFileProps> = ({ show, onClose }) => {
  return (
    <div
      aria-hidden='true'
      className={`pointer-events-none fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-all duration-300 ease-out ${
        show ? 'pointer-events-auto opacity-100' : ''
      }`}
    >
      <div aria-hidden className='relative flex h-[660px] w-[75%] items-center md:w-[500px]'>
        <div className='relative flex w-[30vw] flex-col items-center rounded-3xl bg-white px-10 pb-10 pt-9'>
          <button className='absolute right-10 top-10' onClick={onClose}>
            <Icon.Close className='h-6 w-6' />
          </button>
          <h2 className='text-[24px] font-semibold text-green-900'>Choose File</h2>
          <div className='mt-10 flex w-full flex-col items-center rounded-2xl border-[1px] border-dashed border-[#E5E7EB] py-10'>
            <img src={BrowseImg} alt='Browse Image' className='mb-5 w-[8vw]' />
            <p className='mb-2 text-xl text-gray-700'>
              Drop your files here or <span className='font-semibold text-[#3B82F6]'>browse</span>
            </p>
            <p className='mb-2'>Maximum size: 50MB</p>
            <p>Accepted file type: doc, pdf, ppt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseFile;
