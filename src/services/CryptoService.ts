import axios from "axios";
import {
  CryptoCurrencySchema,
  CryptoPriceSchema,
} from "../schemas/cryptoSchema";
import { PairType } from "../types";

async function getCryptos() {
  const cryptoURL =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(cryptoURL);
  const result = CryptoCurrencySchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

async function fetchCurrentCryptoPrice(pair: PairType) {
  const priceURL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(priceURL);
  console.log(DISPLAY)
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );
  if (result.success) {
    return result.data;
  }
}

export { getCryptos, fetchCurrentCryptoPrice };
