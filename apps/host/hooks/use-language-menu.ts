import { create } from 'zustand';

interface LanguageStoreState {
  languageOpen: boolean;
  lastUpdateTime: number;
}

interface LanguageStoreActions {
  setLanguageOpen: (isOpen: boolean) => void;
}

const useLanguageStore = create<LanguageStoreState & LanguageStoreActions>((set) => ({
  languageOpen: false,
  lastUpdateTime: 0,
  setLanguageOpen: (isOpen) => {
      const currentTime = Date.now();
      set((prevState) => {
          if (currentTime - prevState.lastUpdateTime >= 100) {
              return {
                  languageOpen: isOpen,
                  lastUpdateTime: currentTime,
              };
          }
          return prevState;
      });
  },
}));

export default useLanguageStore;
