import SideBarNavigation from '@/components/modules/SideBarNavigation/SideBarNavigation';
import React, { ReactNode } from 'react';
import MainHeader from '@/components/modules/MainHeader/MainHeader';

type TMainLayout = {
  children: ReactNode;
};

export const MainLayout: React.FC<TMainLayout> = ({ children }) => {
  return (
    <>
      <SideBarNavigation />
      <div>
        <div className='lg:pl-72'>
          <MainHeader />
          <div className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
