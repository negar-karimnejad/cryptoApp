import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetMarketsQuery } from "../utilities/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;

function Homepage() {
  const { data: globalStats, isFetching } = useGetMarketsQuery();
  isFetching && <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="BTC Dominance" value={globalStats?.btcDominance} />
        </Col>
        <Col span={12}>
          <Statistic
            title="BTC Dominance Change"
            value={millify(globalStats?.btcDominanceChange)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats?.marketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Market Cap Change"
            value={`$${millify(globalStats?.marketCapChange)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Volume" value={globalStats?.volume} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Volume Change"
            value={millify(globalStats?.volumeChange)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage;
