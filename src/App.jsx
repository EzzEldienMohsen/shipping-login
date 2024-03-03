import React from 'react';
import { initialValues } from './assets';
import { Title, FormRow, FormCheck, Button } from './components';

function App() {
  const val = JSON.parse(localStorage.getItem('user')) || initialValues;
  const [values, setValues] = React.useState(val);
  const handleChecked = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    setValues({ ...values, [name]: value });
    if (values.checked) {
      localStorage.setItem('user', JSON.stringify(values));
    }
  };
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
    <div className="w-full gradient box-border flex flex-col justify-center items-center h-[800px] ">
      <div className="flex flex-col justify-center items-center bg-white h-[70%] rounded-md shadow-2xl">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center w-96 l  p-10 lg:w-[30vw]"
        >
          {/* LOGO AND NAME */}
          <Title />
          {/* NAME FIELD */}

          {!values.isMember && (
            <FormRow
              name="name"
              type="text"
              label="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}

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
          {/* Forget and remember */}
          <FormCheck handleChecked={handleChecked} />
          {/* SUBMIT BUTTON */}
          <Button />
        </form>
      </div>
    </div>
  );
}

export default App;
