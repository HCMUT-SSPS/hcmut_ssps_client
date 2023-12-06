import { FC } from 'react';

import { Page } from '../../../layouts';

const Notifications: FC = () => {
  return (
    <Page title='Notifications'>
      <div className='p-10'>
        <h1 className='text-2xl font-semibold text-green-900'>Notification</h1>
        <div className='mt-7 flex flex-col space-y-8'>
          <div className='flex flex-col space-y-4'>
            <div className='w-fit rounded-[4px] bg-green-50 px-4 py-2 text-green-900'>Today</div>
            <div className='flex rounded-3xl border-[1px] border-[#E8E8E8] p-6'>
              <img
                src='https://i.imgur.com/8Km9tLL.png'
                alt='Admin avatar'
                className='mr-3 h-9 w-9 rounded-full'
              />
              <div className='mr-10 flex flex-col space-y-3'>
                <p className='text-[18px] font-semibold text-gray-700'>
                  [EMERGENCY] Printer in A4 is in maintenance today, no printing request will be
                  acccepted
                </p>
                <p>
                  At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum
                  sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit
                  scelerisque massa justo et convallis mauris.
                  <br />
                  <br />
                  Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc
                  natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cursus sed
                  aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse
                  scelerisque vitae ut mauris odio. Et enim curabitur risus massa velit gravida sed
                  et. Quam arcu porttitor massa cursus.
                </p>
              </div>
              <p className='text-[12px]'>8:35PM</p>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='w-fit rounded-[4px] bg-green-50 px-4 py-2 text-green-900'>
              Yesterday
            </div>
            <div className='flex rounded-3xl border-[1px] border-[#E8E8E8] p-6'>
              <img
                src='https://i.imgur.com/8Km9tLL.png'
                alt='Admin avatar'
                className='mr-3 h-9 w-9 rounded-full'
              />
              <div className='mr-10 flex flex-col space-y-3'>
                <p className='text-[18px] font-semibold text-gray-700'>
                  [EMERGENCY] Printer in A4 is in maintenance today, no printing request will be
                  acccepted
                </p>
                <p>
                  At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum
                  sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit
                  scelerisque massa justo et convallis mauris.
                  <br />
                  <br />
                  Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc
                  natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cursus sed
                  aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse
                  scelerisque vitae ut mauris odio. Et enim curabitur risus massa velit gravida sed
                  et. Quam arcu porttitor massa cursus.
                </p>
              </div>
              <p className='text-[12px]'>8:35PM</p>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='w-fit rounded-[4px] bg-green-50 px-4 py-2 text-green-900'>
              Dec 25th, 2023
            </div>
            <div className='flex rounded-3xl border-[1px] border-[#E8E8E8] p-6'>
              <img
                src='https://i.imgur.com/8Km9tLL.png'
                alt='Admin avatar'
                className='mr-3 h-9 w-9 rounded-full'
              />
              <div className='mr-10 flex flex-col space-y-3'>
                <p className='text-[18px] font-semibold text-gray-700'>
                  [EMERGENCY] Printer in A4 is in maintenance today, no printing request will be
                  acccepted
                </p>
                <p>
                  At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum
                  sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit
                  scelerisque massa justo et convallis mauris.
                  <br />
                  <br />
                  Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc
                  natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cursus sed
                  aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse
                  scelerisque vitae ut mauris odio. Et enim curabitur risus massa velit gravida sed
                  et. Quam arcu porttitor massa cursus.
                </p>
              </div>
              <p className='text-[12px]'>8:35PM</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Notifications;
