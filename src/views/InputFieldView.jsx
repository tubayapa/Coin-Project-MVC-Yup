const InputFieldView = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label className="form-label mb-1">{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] ? "is-invalid" : ""
        }`}
      />
      <div className="feedback">{formik.errors[name]}&nbsp;</div>
    </div>
  );
};

export default InputFieldView;
