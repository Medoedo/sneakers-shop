import { configureStore } from '@reduxjs/toolkit';
import sneakers from '../components/cardList/sneakersSlice';

export const store = configureStore({
    reducer: {sneakers},
    devTools: process.env.NODE_ENV !== 'production'
});
