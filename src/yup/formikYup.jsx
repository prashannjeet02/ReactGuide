// yup is a validation library used with formik for form validation

import { useFormik } from "formik";
import * as yup from "yup";

export const FormikWithYup = () => {
  const Formik = useFormik({
    initialValues: {
      UserName: "",
      Age: "",
      City: "",
      Mobile: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      UserName: yup
        .string("Username must be string")
        .required("UserName is required")
        .min(5, "Too short!Min 5 chars required")
        .max(20, "To long!Max allowed char is 20"),
      Age: yup.string().required("Age required"),
      Mobile: yup.number("Enter number").required("Mobile number is required"),
    }),
  });
  return (
    <div className="container-fluid">
      <form onSubmit={Formik.handleSubmit}>
        <h2>Formik-Yup</h2>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" name="UserName" onChange={Formik.handleChange} />
          </dd>
          <dd className="text-danger">{Formik.errors.UserName}</dd>
          <dt>Age</dt>
          <dd>
            <input type="text" name="Age" onChange={Formik.handleChange} />
          </dd>
          <dd className="text-danger">{Formik.errors.Age}</dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={Formik.handleChange}>
              <option>Select City</option>
              <option>Jabalpur</option>
              <option>Bhopal</option>
              <option>Indore</option>
            </select>
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input type="number" name="Mobile" onChange={Formik.handleChange} />
          </dd>
          <dd className="text-danger">{Formik.errors.Mobile}</dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
};
