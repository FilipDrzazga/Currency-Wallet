import { configureStore } from '@reduxjs/toolkit';
import walletSlice from './WalletSlice';
import userSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        wallet: walletSlice,
        user: userSlice,
    }
});