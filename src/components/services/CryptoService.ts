import axios from 'axios'
import { CryptoCurrencySchema } from '../../schemas/cryptoSchema';

async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios.get(url);
  const result = CryptoCurrencySchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export default getCryptos