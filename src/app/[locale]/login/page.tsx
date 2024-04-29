'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import React, { FormEvent, useEffect, useState } from 'react';
import LocaleSwitcher from '@/components/units/LocaleSwitcher/LocaleSwitcher';
import GoogleIcon from '@/components/units/icons/GoogleIcon/GoogleIcon';
import LinkedInIcon from '@/components/units/icons/LinkedInIcon/LinkedInIcon';

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();
  const isLoggedIn = session.data;
  const t = useTranslations('SignInPage');

  const [error, setError] = useState<string>();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(`/dashboard`);
    }
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (error) setError(undefined);

    const formData = new FormData(event.currentTarget);
    signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
    }).then((result) => {
      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/dashboard');
      }
    });
  }

  return !isLoggedIn ? (
    <main>
      <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
        email rt@com.com password 123
        <div className='w-48 self-end'>
          <LocaleSwitcher />
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            {t('signIntoAccount')}
          </h2>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
          <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
            <form className='space-y-6' action='/api/auth/callback/credentials' method='post' onSubmit={onSubmit}>
              <div>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  {t('email')}
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  {t('password')}
                </label>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='text-sm leading-6'>
                  <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    {t('forgotPassword')}
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  {t('signIn')}
                </button>
              </div>
            </form>

            <div>
              <div className='relative mt-10'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray-200' />
                </div>
                <div className='relative flex justify-center text-sm font-medium leading-6'>
                  <span className='bg-white px-6 text-gray-900'>{t('continueWith')}</span>
                </div>
              </div>

              <div className='mt-6 grid grid-cols-2 gap-4'>
                <div
                  onClick={() => signIn('google')}
                  className='flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
                >
                  <GoogleIcon />
                  <span className='text-sm font-semibold leading-6'>Google</span>
                </div>

                <div
                  onClick={() => signIn('linkedin')}
                  className='flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
                >
                  <LinkedInIcon />
                  <span className='text-sm font-semibold leading-6'>LinkedIn</span>
                </div>
              </div>

              <div className='relative mt-10'>
                <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                  <div className='w-full border-t border-gray-200' />
                </div>
                <div className='relative flex justify-center text-sm font-medium leading-6'>
                  <span className='bg-white px-6 text-gray-900'>{t('dontHaveAccount')}</span>
                </div>
              </div>
              <div className='mt-6'>
                <div
                  onClick={() => signIn('linkedin')}
                  className='flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
                >
                  <span className='text-sm font-semibold leading-6'>{t('registration')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : null;
};

export default LoginPage;
