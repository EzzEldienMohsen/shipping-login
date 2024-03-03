import React from 'react';
import FormRow from './components/FormRow';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
function App() {
  const [values, setValues] = React.useState(initialValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>this is the title</h1>
      {/* NAME FIELD */}

      <FormRow
        name="name"
        type="text"
        label="name"
        value={values.name}
        handleChange={handleChange}
      />

      {/* EMAIL */}
      <FormRow
        name="email"
        type="email"
        label="email"
        value={values.email}
        handleChange={handleChange}
      />
      {/* PASSWORD */}
      <FormRow
        name="password"
        type="password"
        label="password"
        value={values.password}
        handleChange={handleChange}
      />
      {/* SUBMIT BUTTON */}
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
}

export default App;
