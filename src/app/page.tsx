import { redirect } from 'next/navigation';
import { LOCALES } from '@/constants/LOCALES';

const RootPage = () => {
  redirect(LOCALES.EN);
};

export default RootPage;
