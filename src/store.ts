import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPriceType, PairType } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency;
  result: CryptoPriceType;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: PairType) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPriceType,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },
    fetchData: async (pair) => {
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        result,
      }));
    },
  }))
);
