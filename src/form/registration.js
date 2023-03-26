import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required('Musis zadat heslo').min(8, 'Alespon 8 znaku!'),
})

const initialValues = {
  email: '',
  password: ''
}

export function RegistrationForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label for="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label for="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">
            Register
          </button>
        </form>
      )}
    </Formik>
  );
}