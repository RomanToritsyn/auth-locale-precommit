import { create } from 'zustand';
import { LOCALES } from '@/constants/LOCALES';

type State = {
  locale: string;
};

type Action = {
  setLocale: ($locale: State['locale']) => void;
};

const useLocaleStore = create<State & Action>((set) => ({
  locale: LOCALES.EN,
  setLocale: ($locale) => set(() => ({ locale: $locale })),
}));

export default useLocaleStore;
