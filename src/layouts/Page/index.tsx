import { ReactNode, forwardRef, useEffect } from 'react';

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, TITLE } from '../../configs';

interface PageProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title, description, ...props }, _ref) => {
    useEffect(() => {
      document.title = `${title ? `${title} - ${TITLE}` : DEFAULT_TITLE}`;
      document
        ?.querySelector('meta[name="description"]')
        ?.setAttribute('content', description ?? (DEFAULT_DESCRIPTION || ''));
    }, [title, description]);

    return (
      <div className='h-screen w-screen' {...props}>
        {children}
      </div>
    );
  }
);
Page.displayName = 'Page';

export default Page;
