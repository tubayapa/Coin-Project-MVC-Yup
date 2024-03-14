import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-4">
      <h5 className="d-flex align-items-center gap-2 ">
        <FaBitcoin />
        <span>List of Coin</span>
      </h5>

      <p>
        Coin List is a great resource for tracking cryptocurrencies and digital
        assets around the world.
      </p>

      <div className="d-flex gap-3 justify-content-around my-4">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView data={data} key={data.id} />
        ))}
      </div>
      <table className="table table-dark table-striped table-hover table-responsive mt-5 ">
        <thead>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Market Cap</th>
          <th>24h %</th>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning me-2 ">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>$ {millify(coin.priceUsd)}</td>
              <td>$ {millify(coin.marketCapUsd)}</td>
              <td>$ {millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                % {Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center my-4 ">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="see-more"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default MainView;
