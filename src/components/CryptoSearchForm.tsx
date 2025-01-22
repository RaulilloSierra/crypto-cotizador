import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { PairType } from "../types";

const CryptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);

  const [pair, setPair] = useState<PairType>({
    currency: "",
    criptocurrency: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPair({
      ...pair,
      [name]: [value],
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="currency">Divisa: </label>
        <select name="currency" id="currency" onChange={handleChange}>
          <option value="">Seleccione ---</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda: </label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
        >
          <option value="">Seleccione ---</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="cotizar" />
    </form>
  );
};

export default CryptoSearchForm;
