export type TickerType = {
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yield: string;
  last_trade_time: string;
};

interface TickerMap {
  [ticker: string]: { [data: number]: string };
}

export interface TickersState {
  items: {
    current: TickerType[];
    previous: TickerType[];
  };
  priceDiff: TickerMap;
  activeTicker: string;
  status: string;
}
