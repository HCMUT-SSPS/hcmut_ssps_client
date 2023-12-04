import { FC, useState } from 'react';

import { Page } from '../../../layouts';

import Configurations from './Configurations';
import NewRequest from './NewRequest';

const PrintingService: FC = () => {
  const [step] = useState(1);

  return (
    <Page title='Printing'>
      {step === 0 && <NewRequest />}
      {step === 1 && <Configurations />}
    </Page>
  );
};

export default PrintingService;
