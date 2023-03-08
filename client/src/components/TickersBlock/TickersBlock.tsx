import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Ticker,
  TickerLogo,
  TickerName,
  TickerPicture,
  TickerInfo,
  TickerTxt,
  TickerChangePercent,
  TickerChange,
  TickerArrow,
} from './styles';
import { ReactComponent as Decrease } from '../../images/decrease-arrow.svg';
import { ReactComponent as Increase } from '../../images/increase-arrow.svg';
import {
  selectActiveTicker,
  selectCurrentItems,
  selectPreviousItems,
} from '../../store/tickers/selectors';
import { TickerType } from '../../store/tickers/types';
import { changeActiveTicker } from '../../store/tickers';

interface TickerMap {
  [ticker: string]: string;
}

const findTickerName: TickerMap = {
  AAPL: 'Apple',
  GOOGL: 'Alphabet',
  MSFT: 'Microsoft',
  AMZN: 'Amazon',
  FB: 'Facebook',
  TSLA: 'Tesla',
};

const TickersBlock = () => {
  const dispatch = useDispatch();
  const currentItems = useSelector(selectCurrentItems);
  const previousItems = useSelector(selectPreviousItems);
  const activeTicker = useSelector(selectActiveTicker);

  const handleTicker = (ticker: string) => {
    dispatch(changeActiveTicker(ticker));
  };

  return (
    <Container>
      {currentItems.map((item: TickerType, idx: number) => (
        <Ticker
          key={item.ticker}
          activeTicker={activeTicker === item.ticker}
          onClick={() => handleTicker(item.ticker)}
        >
          <TickerLogo>
            <TickerPicture>{item.ticker}</TickerPicture>
            <TickerName>{findTickerName[item.ticker]}</TickerName>
          </TickerLogo>
          <TickerInfo>
            <TickerTxt>
              price:
              <b>{` ${item.price} $`}</b>
            </TickerTxt>
            <TickerTxt>
              dividend:
              <b>{` ${item.dividend}`}</b>
            </TickerTxt>
            <TickerTxt>
              exchange:
              <b>{` ${item.exchange}`}</b>
            </TickerTxt>
            <TickerChangePercent diff={item.change_percent > previousItems[idx]?.change_percent}>
              percent
              <TickerArrow>
                {item.change_percent > previousItems[idx]?.change_percent ? (
                  <Increase />
                ) : (
                  <Decrease />
                )}
              </TickerArrow>
              <b>{item.change_percent}</b>
            </TickerChangePercent>
            <TickerChange diff={item.change > previousItems[idx]?.change}>
              change
              <br />
              <b>{item.change}</b>
            </TickerChange>
          </TickerInfo>
        </Ticker>
      ))}
    </Container>
  );
};

export default TickersBlock;
