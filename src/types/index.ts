import { z } from "zod";
import { CryptoCurrencySchema, CurrencySchema } from "../schemas/cryptoSchema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>
