import { FC, useState } from 'react';

import { Page } from '../../../layouts';

import Configurations from './Configurations';
import NewRequest from './NewRequest';
import FinalReview from './Review';

const PrintingService: FC = () => {
  const [step] = useState(3);

  return (
    <Page title='Printing'>
      {step === 0 && <NewRequest />}
      {step === 1 && <Configurations />}
      {step === 3 && <FinalReview />}
    </Page>
  );
};

export default PrintingService;
