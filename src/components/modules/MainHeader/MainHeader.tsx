'use client';

import OpenSideBarNavButton from '@/components/units/OpenSideBarNavButton/OpenSideBarNavButton';
import LocaleSwitcher from '@/components/units/LocaleSwitcher/LocaleSwitcher';
import { ProfileDropdown } from '@/components/units/ProfileDropdown/ProfileDropdown';

const MainHeader = () => {
  return (
    <header className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      <OpenSideBarNavButton />
      <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
        <div className='relative flex flex-1' />
        <div className='flex items-center gap-x-4 lg:gap-x-6'>
          <LocaleSwitcher />
          <div className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10' aria-hidden='true' />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
