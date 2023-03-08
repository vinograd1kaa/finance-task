import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from 'chart.js';
import { Container } from './styles';
import { selectActiveTicker, selectPriceDiff } from '../../store/tickers/selectors';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
const Graphic = () => {
  const priceDiff = useSelector(selectPriceDiff);
  const activeTicker = useSelector(selectActiveTicker);

  const options: object = {
    responsive: true,
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 600,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: 'Price Dynamic',
        data: priceDiff[activeTicker],
        backgroundColor: 'green',
        pointBorderColor: 'aqua',
        fill: true,
        tention: 0.4,
      },
    ],
  };

  return (
    <Container style={{ width: '100%', height: 'auto', background: '#fff' }}>
      <Line data={data} options={options} />
    </Container>
  );
};

export default Graphic;
