'use client';

import Link from 'next/link';
import { classNames } from '@/utils/classNames';
import React from 'react';
import useSideBarNavStore from '@/store/SideBarNavStore';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import useLocaleStore from '@/store/LocaleStore';

type TNavItem = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

type TSideBarNavLink = {
  navItem: TNavItem;
};

const SideBarNavLink: React.FC<TSideBarNavLink> = ({ navItem }) => {
  const { name, href } = navItem;
  const t = useTranslations('SideBar');
  const locale = useLocaleStore((state) => state.locale);
  const closeSideBar = useSideBarNavStore((state) => state.closeSideBar);
  const pathname = usePathname();
  const isCurrentRoute = (href: string) => pathname.includes(href) && href.length > 3;

  return (
    <li key={name} onClick={closeSideBar}>
      <Link
        href={`/${locale}/${href}`}
        className={classNames(
          isCurrentRoute(href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
        )}
      >
        <navItem.icon className='h-6 w-6 shrink-0' aria-hidden='true' />
        {t(name)}
      </Link>
    </li>
  );
};

export default SideBarNavLink;
