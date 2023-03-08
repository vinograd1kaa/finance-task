import { RootState } from '../index';

export const selectCurrentItems = (state: RootState) => state.tickers.items.current;
export const selectPreviousItems = (state: RootState) => state.tickers.items.previous;
export const selectPriceDiff = (state: RootState) => state.tickers.priceDiff;
export const selectActiveTicker = (state: RootState) => state.tickers.activeTicker;
