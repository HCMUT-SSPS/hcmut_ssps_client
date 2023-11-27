import { FC, SVGProps, useMemo } from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Icon as IconComponent } from '..';
import Logo from '../../assets/svgs/Logo.svg?react';
import { useStorage } from '../../hooks';

import { User } from '../../typings';

export interface SidebarProps {
  items: {
    Icon: FC<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    IconFill?: FC<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    name: string;
    path: string;
  }[];
}

const CustomSidebar: FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useStorage<User | undefined>('user', undefined);

  const isActive = useMemo(() => {
    return items.map((item) => pathname.includes(item.path));
  }, [pathname, items]);

  if (!user) return null;

  return (
    <Sidebar
      backgroundColor='#FFFFFF'
      className='h-screen bg-white px-4 py-12'
      style={{
        position: 'sticky',
        top: '0px',
        maxHeight: '100dvh',
        zIndex: 1000,
      }}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        },
      }}
    >
      <div>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <Logo className='text-green-900' />
          <p className='pointer-events-none select-none text-xl/normal font-bold text-green-900'>
            <i>Print</i>Pulse
          </p>
        </div>
        <Menu
          className='mt-12'
          menuItemStyles={{
            button: {
              padding: 0,
              height: 'auto',
              backgroundColor: 'transparent',
              ['&:hover']: {
                backgroundColor: 'transparent',
              },
              ['&:disabled']: {},
              rowGap: '0.75rem',
            },
          }}
        >
          {items.map(({ name, path, Icon, IconFill }, index) => (
            <MenuItem
              key={path}
              component={<Link to={path} />}
              className={`group mb-3 h-auto rounded-lg px-2 py-3 transition-colors duration-300 ${
                !isActive[index] ? 'hover:bg-green-400/10 hover:text-green-900' : ''
              }`}
              disabled={isActive[index]}
            >
              <div
                className={`flex flex-row items-center gap-x-4 ${
                  isActive[index] ? 'text-green-900' : ''
                }`}
              >
                <div className='flex flex-row gap-x-0'>
                  <Icon
                    className={`w-6 transition-all duration-300 ${
                      !IconFill
                        ? 'group-hover:text-green-900'
                        : isActive[index]
                        ? 'opacity-0'
                        : 'opacity-100 group-hover:opacity-0'
                    }`}
                  />
                  {IconFill ? (
                    <IconFill
                      className={`-ml-6 w-6 transition-all duration-200 ${
                        isActive[index] ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  ) : null}
                </div>

                <span
                  className={`select-none text-lg/normal ${
                    isActive[index] ? 'font-semibold text-green-900' : 'font-normal'
                  }`}
                >
                  {name}
                </span>
              </div>
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-x-2'>
          <img
            src={user.avatar}
            alt="user's profile picture"
            className='aspect-square w-16 rounded-lg'
          />
          <div className='space-y-1'>
            <p className='text-base/normal font-medium text-gray-700'>{user.name}</p>
            <p className='text-sm/normal font-normal'>{user.isManager ? 'Admin' : 'Student'}</p>
          </div>
        </div>
        <button
          className='flex flex-row items-center gap-x-2'
          onClick={() => {
            setUser(undefined);
            navigate('/');
          }}
        >
          <IconComponent.SignOut className='w-6 text-gray-900' />
        </button>
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
