import { useEffect } from "react";
import { fetchFromAPI } from "./utilities/fetchFromApi";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchFromAPI("coins").then((data) => setCoins(data.result));
  }, []);

  return (
    <>
      {coins.map((coin) => (
        <div key={coin.id}>
          <img src={coin.icon} alt="" />
          <p>{coin.name}</p>
          <p>{coin.price}</p>
          <p>{coin.symbol}</p>
        </div>
      ))}
    </>
  );
}

export default App;
