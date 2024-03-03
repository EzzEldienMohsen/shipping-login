import React from 'react';
import FormRow from './components/FormRow';
import { logo } from './assets';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: false,
  checked: true,
};
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
          <div className="flex flex-col justify-center items-center mb-12">
            <img src={logo} alt="truck" className="w-16 h-16 lg:w-24 lg:h-24" />
            <h1 className="font-inder uppercase font-bold tracking-wide">
              company name
            </h1>
          </div>
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
          <div className="cursor-pointer flex items-end justify-end mb-2 w-full -mt-3">
            <h3 className="text-md font-semibold capitalize ">
              forget password?
            </h3>
          </div>
          <div className="flex justify-start items-start w-full">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="checked"
                defaultChecked
                onChange={handleChecked}
                className="checkbox checkbox-warning border-black  [--chkbg:theme(colors.green.600)] [--chkfg:white] mr-3"
              />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="btn btn-block bg-[#4ABC56] text-white uppercase  md:w-[25vw] mb-4"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
