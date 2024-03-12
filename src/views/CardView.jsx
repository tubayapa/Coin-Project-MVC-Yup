import millify from "millify";

const CardView = ({ data }) => {
  return (
    <div className="coin-card d-flex flex-column  justify-content-between  border rounded p-3">
      <div>
        <h4>{data.name}</h4>
        <h6>{data.symbol}</h6>
        <p>{millify(data.priceUsd)}$</p>
      </div>

      <p>
        <span>24 Hour Change % </span>
        <span className={data.changePercent24Hr >= 0 ? "up" : "down"}>
          {Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
