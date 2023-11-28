import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ForestBackground from '../../assets/images/ForestBackground.png';
import Globe from '../../assets/images/Globe.png';
import TreeBackground from '../../assets/images/TreeBackground.png';
import Logo from '../../assets/svgs/Logo.svg?react';

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex h-screen  w-screen items-center justify-center bg-green-900 px-[72px] py-8'>
      <img src={ForestBackground} className='absolute bottom-0 left-0 h-[57%] w-auto select-none' />
      <img src={TreeBackground} className='absolute bottom-0 right-0 h-[65%] w-auto select-none' />

      <Link
        to='/'
        className='absolute left-[72px] top-8 z-10 flex flex-row items-center justify-start gap-x-2 text-white'
      >
        <Logo />
        <p className='pointer-events-none select-none text-xl/normal font-bold'>
          <i>Print</i>Pulse
        </p>
      </Link>

      <div className='flex w-auto flex-col items-center justify-center rounded-xl bg-white px-12 py-[60px]'>
        <img src={Globe} className='-mx-12 h-auto w-[calc(100%+96px)]' />

        <div className='mt-20 flex w-full flex-col items-center justify-center gap-y-4 text-green-900'>
          <button
            onClick={() => navigate('/login/users')}
            className='flex w-full items-center justify-center rounded-lg border border-green-900 p-4 font-semibold'
          >
            Sign In As Users
          </button>
          <button
            onClick={() => navigate('/login/admin')}
            className='flex w-full items-center justify-center rounded-lg border border-green-900 p-4 font-semibold'
          >
            Sign In As SSPOs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
