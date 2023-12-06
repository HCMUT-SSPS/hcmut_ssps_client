import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Icon } from '..';
import BrowseImg from '../../assets/images/BrowseImg.png';
import useBoundStore from '../../store';

interface BrowseFileProps {
  show: boolean;
  onClose: () => void;
  setFile: (file: File[]) => void;
  setCurrenStep: (nextStep: number) => void;
}

const BrowseFile: FC<BrowseFileProps> = ({ show, onClose, setFile, setCurrenStep }) => {
  const setStep = useBoundStore.use.setStep();
  const setFileName = useBoundStore.use.setFileName();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles(acceptedFiles);
      setFile(acceptedFiles);
    },
    maxFiles: 1,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc'],
      'text/plain': ['.txt'],
    },
  });

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
          <div
            {...getRootProps()}
            className='mt-10 flex w-full cursor-pointer flex-col items-center rounded-2xl border-[1px] border-dashed border-[#E5E7EB] py-10'
          >
            <input {...getInputProps()} />
            <img src={BrowseImg} alt='Browse Image' className='mb-5 w-[8vw]' />
            {uploadedFiles.length === 0 ? (
              <p className='mb-2 text-xl text-gray-700'>
                Drop your files here or <span className='font-semibold text-[#3B82F6]'>browse</span>
              </p>
            ) : (
              <p className='... mb-2 overflow-hidden text-ellipsis text-gray-700'>
                {uploadedFiles[0].name}
              </p>
            )}
            {uploadedFiles.length === 0 ? (
              <div className='flex flex-col items-center'>
                <p className='mb-2'>Maximum size: 50MB</p>
                <p>Accepted file type: doc, pdf, ppt</p>
              </div>
            ) : (
              <div className='flex w-full justify-center space-x-3 self-end'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedFiles([]);
                  }}
                  className='rounded-lg border-[1px] border-green-900 px-6 py-2 font-semibold text-green-900'
                >
                  Reset
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setStep(1);
                    setFileName(uploadedFiles[0].name);
                    setCurrenStep(1);
                  }}
                  className='rounded-lg bg-green-900 px-6 py-2 text-white'
                >
                  Next Step
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseFile;
