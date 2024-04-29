import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES } from '@/constants/LOCALES';

export const locales = Object.values(LOCALES);
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
