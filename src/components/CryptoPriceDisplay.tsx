import { useMemo } from "react";
import { useCryptoStore } from "../store";
import { PairType } from "../types";

type CryptoPriceDisplayType = {
  pair: PairType;
};

const CryptoPriceDisplay = ({ pair }: CryptoPriceDisplayType) => {
  const result = useCryptoStore((state) => state.result);

  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);
  console.log(hasResult);
  return (
    <div className="result-wrapper">
      {hasResult && (
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
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
