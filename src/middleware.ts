import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './navigation';
import { LOCALES } from '@/constants/LOCALES';
import { PUBLIC_PAGES } from '@/constants/PUBLIC_PAGES';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: LOCALES.EN,
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => {
    // console.log('req',req)
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log('token', token);
        return token != null;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${PUBLIC_PAGES.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    // eslint-disable-next-line
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
