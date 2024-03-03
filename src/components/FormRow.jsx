/* eslint-disable react/prop-types */
const FormRow = ({ name, label, type, value, handleChange }) => {
  return (
    <div className="flex flex-col justify-center items-start w-[100%] md:w-[25vw]">
      <label className="mb-2" htmlFor={name}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="mb-4 py-1 px-4 border-black border-2 rounded-md w-[100%] md:w-[25vw]"
      />
    </div>
  );
};

export default FormRow;
