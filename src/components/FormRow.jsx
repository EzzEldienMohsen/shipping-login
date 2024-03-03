/* eslint-disable react/prop-types */
const FormRow = ({ name, label, type, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label || name}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
