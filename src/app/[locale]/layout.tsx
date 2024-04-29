import { Inter } from 'next/font/google';
import '../globals.css';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import CommonLayout from '@/components/layout/CommonLayout/CommonLayout';
import { NextAuthProvider } from '@/components/providers/NextAuthProvider/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SCI',
  description: 'SCI',
};

type TAppLayout = {
  children: React.ReactNode;
  params: { locale: string };
};

const AppLayout: React.FC<TAppLayout> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale} className='h-full bg-white'>
      <body className={`${inter.className} h-full`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextAuthProvider>
            <CommonLayout locale={locale}>{children}</CommonLayout>
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default AppLayout;
