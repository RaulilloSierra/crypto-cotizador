import { useEffect, useState } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
import { PairType } from "./types";

const App = () => {
  const [pair, setPair] = useState<PairType>({
    currency: "",
    criptocurrency: "",
  });
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>criptomonedas</span>{" "}
        </h1>
        <div className="content">
          <CryptoSearchForm pair={pair} setPair={setPair} />
          <CryptoPriceDisplay pair={pair} />
        </div>
      </div>
    </>
  );
};

export default App;
