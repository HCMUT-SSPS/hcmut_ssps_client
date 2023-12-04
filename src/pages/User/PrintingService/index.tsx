import { FC, useState } from 'react';

import { Page } from '../../../layouts';

import Configurations from './Configurations';
import NewRequest from './NewRequest';
import PrintDetails from './PrintDetails';
import FinalReview from './Review';

const PrintingService: FC = () => {
  const [step] = useState(2);

  return (
    <Page title='Printing'>
      {step === 0 && <NewRequest />}
      {step === 1 && <Configurations />}
      {step === 2 && <PrintDetails />}
      {step === 3 && <FinalReview />}
    </Page>
  );
};

export default PrintingService;
