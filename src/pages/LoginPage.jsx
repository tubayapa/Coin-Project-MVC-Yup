import { useFormik } from "formik";
import { schema } from "../../schema";
import InputFieldView from "../views/InputFieldView";
import { inputs } from "../constants";

const LoginPage = () => {
  // formik'in tum ozelliklerini kullanmamizi saglar
  const formik = useFormik({
    /// formda tutulacak verilerin ilk degerler
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // validasyon semasi
    // inputlardaki verilere semadaki kosullara uygun mu diye kontrol eder eger gecerli degilse error statetinde hatalari ekler ve hatalari yonetiriz

    validationSchema: schema,

    // form gonderilince calisacak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller (e.preventDefault isini yapar)
    //1. values inputlardaki verileri alir
    //2. aksiyonlari alir mesela reset aksiyounu

    onSubmit: (values, actions) => {},
  });

  return (
    <div className="login-page">
      <div className="container my-5 style={{ maxWidth: '700px' }} ">
        <h2 className="d-flex gap-2 justify-content-center  align-items-center ">
          <img height={60} src="/public/c-logo.png" />
          <span>Coinmania</span>
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

export default LoginPage;
