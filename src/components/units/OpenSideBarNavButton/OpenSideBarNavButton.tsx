'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import useSideBarNavStore from '@/store/SideBarNavStore';
import { useTranslations } from 'next-intl';

const OpenSideBarNavButton = () => {
  const openSideBar = useSideBarNavStore((state) => state.openSideBar);
  const t = useTranslations('SideBar');
  return (
    <>
      <button type='button' className='-m-2.5 p-2.5 text-gray-700 lg:hidden' onClick={openSideBar}>
        <span className='sr-only'>{t('openSideBar')}</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>
    </>
  );
};

export default OpenSideBarNavButton;
