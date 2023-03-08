import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TickersState, TickerType } from './types';

export const fetchTickers = createAsyncThunk(
  'tickers/fetchTickers',
  async (res: TickerType[]) => res,
);

const initialState: TickersState = {
  items: {
    current: [],
    previous: [],
  },
  priceDiff: {},
  activeTicker: 'AAPL',
  status: '',
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    changeActiveTicker(state, action) {
      state.activeTicker = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickers.pending, (state: TickersState) => {
      state.status = 'loading';
    });
    builder.addCase(
      fetchTickers.fulfilled,
      (state: TickersState, action: { payload: TickerType[] }) => {
        state.status = 'resolved';

        action.payload.map((item: TickerType) => {
          return (state.priceDiff[item.ticker] = {
            ...state.priceDiff[item.ticker],
            [item.last_trade_time.slice(0, -5)]: item.price,
          });
        });

        state.items.previous = state.items.current;
        state.items.current = action.payload;
      },
    );

    builder.addCase(fetchTickers.rejected, (state: TickersState) => {
      state.status = 'error';
    });
  },
});

export const { changeActiveTicker } = tickersSlice.actions;

export default tickersSlice.reducer;
