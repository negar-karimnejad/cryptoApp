/* eslint-disable react/prop-types */
import  { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import {
  useGetCryptoNewsQuery,
  useGetCryptosQuery,
} from "../utilities/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();
  const { data } = useGetCryptosQuery(100);

  isFetching && "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.result?.map((currency) => (
              <Option value={currency.name} key={currency.id}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.result.map((news) => (
        <Col xs={24} sm={12} lg={8} key={news.id}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.source}
                </Title>
                <img
                  style={{ width: 150, height: 100, objectFit: "cover" }}
                  src={news?.imgUrl}
                  alt=""
                />
              </div>
              <p>
                {news.title.length > 100
                  ? `${news.title.substring(0, 100)}...`
                  : news.title}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.imgUrl} alt="" />
                  <Text className="provider-name">{news.source}</Text>
                </div>
                <Text>{moment(news.feedDate).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
