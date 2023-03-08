import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickers';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
