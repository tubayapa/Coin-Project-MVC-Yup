import { useFormik } from "formik";
import { schema } from "../../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
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

    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
