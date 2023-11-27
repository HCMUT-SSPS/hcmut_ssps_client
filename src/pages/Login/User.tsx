import { FC, useState } from 'react';
import { useLocalStorage, useSessionStorage } from '@uidotdev/usehooks';
import { Link, useNavigate } from 'react-router-dom';

import ForestBackground from '../../assets/images/ForestBackground.png';
import TreeBackground from '../../assets/images/TreeBackground.png';
import Logo from '../../assets/svgs/Logo.svg?react';
import { Icon } from '../../components';
import { UserAccount } from '../../data/account';

import { User as TUser } from '../../typings';

const User: FC = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [, setLocalUser] = useLocalStorage<TUser | undefined>('user', undefined);
  const [, setSessionUser] = useSessionStorage<TUser | undefined>('user', undefined);

  return (
    <div className='flex h-screen w-screen flex-row items-center justify-center'>
      <div className='relative flex h-full w-[43%] flex-col gap-x-[72px] bg-green-900 px-12 py-[60px]'>
        <img
          src={ForestBackground}
          className='absolute bottom-0 left-0 h-[57%] w-auto select-none'
        />
        <img
          src={TreeBackground}
          className='absolute bottom-0 right-0 h-[65%] w-auto select-none'
        />

        <Link to='/' className='flex flex-row items-center justify-start gap-x-2 text-white'>
          <Logo />
          <p className='pointer-events-none select-none text-xl/normal font-bold'>
            <i>Print</i>Pulse
          </p>
        </Link>

        <h1 className='mt-[108px] text-center text-5xl/normal font-medium text-white'>
          Use Paper Wisely!
        </h1>
      </div>
      <div
        className='flex h-full w-full flex-1 flex-col items-center justify-center
        gap-y-3 rounded-xl bg-white px-12 py-[60px]'
      >
        <h1 className='w-full text-[40px]/normal font-semibold text-gray-800'>
          Sign in to your account
        </h1>
        <h2 className='w-full text-base/normal'>
          PrintPulse is connected with your MyBK account, please use your respected email and
          password to sign in.
        </h2>

        <form
          className='flex w-full flex-col gap-y-[18px] py-6'
          onSubmit={(e) => {
            e.preventDefault();
            if (rememberMe) {
              if (auth.email === UserAccount.email && auth.password === UserAccount.password) {
                setLocalUser(UserAccount);
                setTimeout(() => {
                  navigate('/dashboard');
                }, 200);
              }
            } else {
              if (auth.email === UserAccount.email && auth.password === UserAccount.password) {
                setSessionUser(UserAccount);
                setTimeout(() => {
                  navigate('/dashboard');
                }, 200);
              }
            }
          }}
        >
          <div className='flex w-full flex-col gap-y-[6px]'>
            <label htmlFor='email' className='block w-full text-gray-800'>
              Email
            </label>
            <input
              id='email'
              type='email'
              value={auth.email}
              onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              className='w-full rounded-lg border border-gray-200 px-[18px] py-3 text-base/normal'
              placeholder='Email address...'
            />
          </div>

          <div className='flex w-full flex-col gap-y-[6px]'>
            <label htmlFor='password' className='block w-full text-gray-800'>
              Password
            </label>
            <div className='relative flex w-full flex-row'>
              <input
                id='password'
                value={auth.password}
                onChange={(e) => setAuth({ ...auth, password: e.target.value })}
                type={showPassword ? 'text' : 'password'}
                className='w-full rounded-lg border border-gray-200 px-[18px] py-3 text-base/normal text-gray-800'
                placeholder='Password...'
              />
              <button
                type='button'
                className='absolute bottom-0 right-[18px] z-10 flex h-full items-center text-gray-800'
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon.Eye.Opened
                  className={`h-auto w-6 transform-gpu duration-200 ${
                    showPassword ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <Icon.Eye.Closed
                  className={`absolute h-auto w-6 transform-gpu duration-200 ${
                    showPassword ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className='mt-[6px] flex flex-col gap-y-6'>
            <button
              type='button'
              className='flex flex-row items-center gap-x-2'
              onClick={() => setRememberMe(!rememberMe)}
            >
              <Icon.Check.Filled
                className={`h-[19px] w-auto border border-gray-300  ${
                  rememberMe ? 'text-blue-600' : 'text-transparent'
                }`}
              />
              <p className='text-sm/normal text-gray-600'>Remember Me</p>
            </button>

            <button type='submit' className='rounded-lg bg-green-900 px-20 py-[18px] text-white'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
