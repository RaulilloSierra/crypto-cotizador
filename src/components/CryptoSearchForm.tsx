import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { PairType } from "../types";
import ErrorMessage from "./ErrorMessage";

const CryptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<PairType>({
    currency: "",
    criptocurrency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPair({
      ...pair,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");

    // consultar en la api
    fetchData(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Divisa: </label>
        <select
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
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
          value={pair.criptocurrency}
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
