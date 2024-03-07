import { useFormik } from "formik";

export const ThirdParty = () => {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: 0,
      City: "",
      Mobile: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="text" name="Age" onChange={formik.handleChange} />
          </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option>Select City</option>
              <option>Mohali</option>
              <option>Hyderabad</option>
              <option>Indore</option>
            </select>
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input type="number" name="Mobile" onChange={formik.handleChange} />
          </dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
};
