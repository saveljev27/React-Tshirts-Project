import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import shirt from './shirt/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    shirt,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
