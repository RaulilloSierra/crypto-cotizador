import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencySchema = z.array(
  z.object({
    CoinInfo: z.object({
      Id: z.string(),
      FullName: z.string(),
      Name: z.string(),
    }),
  })
);

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCTHOUR: z.string(),
  LASTUPDATE: z.string(),
});
