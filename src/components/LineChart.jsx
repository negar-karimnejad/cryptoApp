/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory?.length; i += 1) {
    coinPrice.push(coinHistory?.length && coinHistory[1]);
  }

  for (let i = 0; i < coinHistory?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.length && coinHistory[0]).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.length && coinHistory[3]}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options}  />
    </>
  );
};

export default LineChart;
