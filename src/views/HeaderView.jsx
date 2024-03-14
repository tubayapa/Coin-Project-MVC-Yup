import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center text-decoration-none  ">
      <Link
        to={"/home"}
        className="d-flex gap-2 align-items-center  text-decoration-none"
      >
        <img height={40} src="/public/c-logo.png" alt="logo" />
        <h4 className="text-light  ">CoinMania</h4>
      </Link>

      <nav className="d-flex gap-3">
        <NavLink className="text-light text-decoration-none " to={"/"}>
          Sign In
        </NavLink>
        <NavLink className="text-light text-decoration-none " to={"/home"}>
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
