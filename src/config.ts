import { Pathnames } from 'next-intl/navigation';
import { LOCALES } from '@/constants/LOCALES';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${port}`;

export const defaultLocale = LOCALES.EN;
export const locales = Object.values(LOCALES);

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    uk: '/pathnames',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
