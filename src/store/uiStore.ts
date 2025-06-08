import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
    isSidebarOpen: boolean;
    theme: 'light' | 'dark';
    toggleSidebar: () => void;
    toggleTheme: () => void;
}

export const useUIStore = create(
    persist<UIState>(
        (set) => ({
            isSidebarOpen: false,
            theme: 'light',
            toggleSidebar: () =>
                set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
            toggleTheme: () =>
                set((state) => ({
                    theme: state.theme === 'light' ? 'dark' : 'light',
                })),
        }),
        {
            name: 'ui-storage'
        })
);

