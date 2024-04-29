'use client';

import React, { ReactNode, useEffect } from 'react';
import useLocaleStore from '@/store/LocaleStore';

type TCommonLayout = {
  children: ReactNode;
  locale: string;
};

export const CommonLayout: React.FC<TCommonLayout> = ({ children, locale }) => {
  const setLocale = useLocaleStore((state) => state.setLocale);

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  return <main className='min-h-full'>{children}</main>;
};

export default CommonLayout;
