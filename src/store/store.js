import { configureStore } from '@reduxjs/toolkit';
import sneakers from '../components/cardList/sneakersSlice';
import cart from "../components/header/cartSlice"

export const store = configureStore({
    reducer: {sneakers, cart},
    devTools: process.env.NODE_ENV !== 'production'
});
