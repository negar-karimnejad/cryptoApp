import { Layout, Typography, Space } from "antd";
import { Link, useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">{router}</div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#FFF", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
