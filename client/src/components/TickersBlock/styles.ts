import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Ticker = styled('div')<{ activeTicker: boolean }>`
  text-align: center;
  width: 200px;
  padding: 30px 0;
  border: 2px solid #fff;
  border-radius: 23%;
  margin: 5px 16px;
  cursor: pointer;
  background: ${({ activeTicker }) => (activeTicker ? '#545454' : '')};
`;

export const TickerLogo = styled('span')`
  display: -webkit-inline-box;
`;

export const TickerPicture = styled('div')`
  padding: 3px 5px;
  border-radius: 4px;
  background: red;
`;

export const TickerName = styled('h3')`
  margin-left: 4px;
`;

export const TickerInfo = styled('div')`
  margin-top: 10px;
`;

export const TickerTxt = styled('p')`
  margin: 3px;
`;

export const TickerChangePercent = styled('div')<{ diff: boolean }>`
  display: inline-block;
  width: 32%;
  padding: 10px 0;
  margin: 10px 5px auto;
  border-radius: 15px;
  background: ${({ diff }) => (diff ? '#91ef91' : '#f18181')};
`;

export const TickerChange = styled('div')<{ diff: boolean }>`
  display: inline-block;
  width: 40%;
  padding: 10px 0;
  margin: 0 auto;
  border-radius: 15px;
  background: ${({ diff }) => (diff ? '#91ef91' : '#f18181')};
`;

export const TickerArrow = styled('div')`
  background: none;
  height: 30px;
  margin: 2px 0 6px;
`;
