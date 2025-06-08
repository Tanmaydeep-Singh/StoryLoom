import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    username: string;  // Use lowercase 'string' for type
    email: string;     // Use lowercase 'string' for type
}

interface IAuth {
    user: User | null;
    loading: boolean;
    token: string | null;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    setToken: (token: string | null) => void;
}

// Define your store with persist
export const useAuthStore = create(
    persist<IAuth>(
        (set) => ({
            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            setLoading: (loading) => set({ loading }),
            user: null,
            token: null,
            loading: false,
        }),
        {
            name: 'auth-storage'
        }
    )
);

