import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

export const FormikCompo = () => {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{ UserName: "", Age: 0, City: "", Mobile: 0 }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={yup.object({
          UserName: yup.string().required(),
          Age: yup.number().required(),
          Mobile: yup.number().required(),
        })}
      >
        {
          <Form>
            <h2>Formik-Component</h2>
            <dl>
              <dt>UserName</dt>
              <dd>
                <Field type="text" name="UserName" />
              </dd>
              <dd>
                <ErrorMessage name="UserName" />
              </dd>
              <dt>Age</dt>
              <dd>
                <Field type="number" name="Age" />
              </dd>
              <dd>
                <ErrorMessage name="Age" />
              </dd>
              <dt>City</dt>
              <dd>
                <Field as="select">
                  <option>Select City</option>
                  <option>Panna</option>
                  <option>Jabalput</option>
                  <option>Bhopal</option>
                  <option>Bilaspur</option>
                </Field>
              </dd>
              <dt>Mobile</dt>
              <dd>
                <Field type="number" name="Mobile" />
              </dd>
              <dd>
                <ErrorMessage name="Mobile" />
              </dd>
            </dl>
            <button>Register</button>
          </Form>
        }
      </Formik>
    </div>
  );
};
