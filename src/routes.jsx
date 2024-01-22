import CryptoDetails from "./components/CryptoDetails";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import Homepage from "./components/Homepage";
import News from "./components/News";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/exchanges", element: <Exchanges /> },
  { path: "/cryptocurrencies", element: <Cryptocurrencies /> },
  { path: "/crypto/:coinId", element: <CryptoDetails /> },
  { path: "/news", element: <News /> },
];
