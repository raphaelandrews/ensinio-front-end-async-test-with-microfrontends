import { create } from 'zustand';

interface SolutionsStoreState {
    solutionsOpen: boolean;
    lastUpdateTime: number;
}

interface SolutionsStoreActions {
    setSolutionsOpen: (isOpen: boolean) => void;
}

const useSolutionsStore = create<SolutionsStoreState & SolutionsStoreActions>((set) => ({
    solutionsOpen: false,
    lastUpdateTime: 0,
    setSolutionsOpen: (isOpen) => {
        const currentTime = Date.now();
        set((prevState) => {
            if (currentTime - prevState.lastUpdateTime >= 100) {
                return {
                    solutionsOpen: isOpen,
                    lastUpdateTime: currentTime,
                };
            }
            return prevState;
        });
    },
}));

export default useSolutionsStore;
