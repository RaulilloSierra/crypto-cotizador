import { z } from "zod";
import {
  CryptoCurrencySchema,
  CurrencySchema,
  PairSchema,
} from "../schemas/cryptoSchema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type PairType = z.infer<typeof PairSchema>;
