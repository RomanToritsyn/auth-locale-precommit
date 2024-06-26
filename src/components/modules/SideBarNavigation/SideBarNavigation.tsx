'use client';

import React, { Fragment } from 'react';
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import SIDE_BAR_NAVIGATION from '@/constants/SIDE_BAR_NAVIGATION';
import useSideBarNavStore from '@/store/SideBarNavStore';
import { useTranslations } from 'next-intl';
import SideBarNavLink from '@/components/units/SideBarNavLink/SideBarNavLink';

const SideBarNavigation: React.FC = () => {
  const t = useTranslations('SideBar');
  const isSideBarOpen = useSideBarNavStore((state) => state.isSideBarOpen);
  const setSidebarOpen = useSideBarNavStore((state) => state.setSidebarOpen);
  const closeSideBar = useSideBarNavStore((state) => state.closeSideBar);

  return (
    <>
      <Transition.Root show={isSideBarOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-900/80' />
          </Transition.Child>

          <div className='fixed inset-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button type='button' className='-m-2.5 p-2.5' onClick={closeSideBar}>
                      <span className='sr-only'>{t('closeSidebar')}</span>
                      <XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 pt-12 ring-1 ring-white/10'>
                  <nav className='flex flex-1 flex-col pt-4'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                      <li>
                        <ul role='list' className='-mx-2 space-y-1'>
                          {SIDE_BAR_NAVIGATION.map((item) => (
                            <SideBarNavLink navItem={item} key={item.name} />
                          ))}
                        </ul>
                      </li>
                      <li className='mt-auto'>
                        <Link
                          href='/'
                          className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                        >
                          <QuestionMarkCircleIcon className='h-6 w-6 shrink-0' aria-hidden='true' />
                          {t('support')}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 pt-12'>
          <nav className='flex flex-1 flex-col pt-4'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {SIDE_BAR_NAVIGATION.map((item) => (
                    <SideBarNavLink navItem={item} key={item.name} />
                  ))}
                </ul>
              </li>
              <li className='mt-auto'>
                <Link
                  href='/'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                >
                  <QuestionMarkCircleIcon className='h-6 w-6 shrink-0' aria-hidden='true' />
                  {t('support')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBarNavigation;
