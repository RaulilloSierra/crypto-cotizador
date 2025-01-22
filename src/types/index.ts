import { z } from "zod";
import { CurrencySchema } from "../schemas/cryptoSchema";

export type Currency = z.infer<typeof CurrencySchema>;
