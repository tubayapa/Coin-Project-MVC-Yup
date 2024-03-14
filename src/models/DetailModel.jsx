import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    // coin verilerini class'tan alinacak ornegin icine gonder
    this.coin = coin;

    //An array of detail data
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Volume",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24h Change ",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24h Volume",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    // grafik icin kullanilacak veri

    this.graphicData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Price",
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "red",
          backgroundColor: "orange",
        },
      ],
    };
    console.log(this.modelData);
  }

  // api'den hep fiyat hem detay verisini al

  static async getCoin(id) {
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
