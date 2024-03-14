import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/DetailModel.jsx";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1- url'den id'yi al
  const { id } = useParams();

  //2- coin'nin detay verilerini ve fiyat gecmisini api'den al

  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);
  // class'tan ornek al
  const model = new DetailModel(coin);

  return <DetailView model={model} />;
};

export default DetailController;
