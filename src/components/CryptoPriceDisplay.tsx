import { useMemo } from "react";
import { useCryptoStore } from "../store";
import { PairType } from "../types";
import Spinner from "./Spinner/Spinner";

type CryptoPriceDisplayType = {
  pair: PairType;
};

const CryptoPriceDisplay = ({ pair }: CryptoPriceDisplayType) => {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);

  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>{`Precio de ${pair.currency} a ${pair.criptocurrency}: `}</h2>
            <h2>{result.PRICE}</h2>
            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt={pair.criptocurrency}
              />
              <div>
                <p>
                  Máximo hoy: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Mímino hoy: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variación (24 horas): <span>{result.CHANGEPCTHOUR}</span>
                </p>
                <p>
                  Última Actualización: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
