import { FC, useState } from 'react';

import { Page } from '../../../layouts';
import useBoundStore from '../../../store';

import Configurations from './Configurations';
import NewRequest from './NewRequest';
import PrintDetails from './PrintDetails';
import FinalReview from './Review';

const PrintingService: FC = () => {
  const step = useBoundStore.use.step();
  const [currentStep, setCurrentStep] = useState<number>(step);
  const [file, setFile] = useState<File[]>([]);

  return (
    <Page title='Printing'>
      {currentStep === 0 && (
        <NewRequest
          setFile={(uploadFile: File[]) => setFile(uploadFile)}
          setCurrentStep={(nextStep: number) => setCurrentStep(nextStep)}
        />
      )}
      {currentStep === 1 && (
        <Configurations setCurrentStep={(nextStep: number) => setCurrentStep(nextStep)} />
      )}
      {currentStep === 2 && (
        <PrintDetails
          file={file[0]}
          setCurrentStep={(nextStep: number) => setCurrentStep(nextStep)}
        />
      )}
      {currentStep === 3 && (
        <FinalReview setCurrentStep={(nextStep: number) => setCurrentStep(nextStep)} />
      )}
    </Page>
  );
};

export default PrintingService;
