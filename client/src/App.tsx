import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import io from 'socket.io-client';
import TickersBlock from './components/TickersBlock/TickersBlock';
import Graphic from './components/Graphic/Graphic';
import { fetchTickers } from './store/tickers';
import { AppDispatch } from './store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const socket = io('http://localhost:4000/');
    socket.emit('start');

    socket.on('ticker', function (data) {
      return dispatch(fetchTickers(data));
    });
  }, []);

  return (
    <div>
      <TickersBlock />
      <Graphic />
    </div>
  );
};

export default App;
