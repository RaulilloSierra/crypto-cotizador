import { currencies } from "../data";
import { useCryptoStore } from "../store";

const CryptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Divisa: </label>
        <select name="currency" id="currency">
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
        <select name="criptocurrency" id="criptocurrency">
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
