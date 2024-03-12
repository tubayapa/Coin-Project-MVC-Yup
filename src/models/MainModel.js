import axios from "axios";

export default class MainModel {
  // new model deyip clonelamak yerine static yazdik
  static async getCoins(page) {
    try {
      const params = {
        offset: (page - 1) * 15, // kac tane veri atlanacak
        limit: 15, // kac veri alinacak
      };
      const res = await axios.get("http://api.coincap.io/v2/assets", {
        params,
      });

      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  }
}
