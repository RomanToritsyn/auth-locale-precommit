import { create } from 'zustand';

type State = {
  isSideBarOpen: boolean;
};

type Action = {
  setSidebarOpen: (isOpened: State['isSideBarOpen']) => void;
  closeSideBar: () => void;
  openSideBar: () => void;
};

const useSideBarNavStore = create<State & Action>((set) => ({
  isSideBarOpen: false,
  setSidebarOpen: (isOpened) => set(() => ({ isSideBarOpen: isOpened })),
  closeSideBar: () => set(() => ({ isSideBarOpen: false })),
  openSideBar: () => set(() => ({ isSideBarOpen: true })),
}));

export default useSideBarNavStore;
