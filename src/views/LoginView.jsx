import { inputs } from "../constants";
import InputFieldView from "./InputFieldView";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5 style={{ maxWidth: '700px' }} ">
        <h2 className="d-flex gap-2 justify-content-center  align-items-center ">
          <img height={60} src="/public/c-logo.png" />
          <span>CoinMania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-2 mt-3 "
        >
          {inputs.map((data) => (
            <InputFieldView key={data.name} formik={formik} data={data} />
          ))}

          <button className="btn btn-primary mt-2" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
