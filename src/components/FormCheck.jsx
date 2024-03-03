/* eslint-disable react/prop-types */
/**
 * @param {function} prop.handleChecked */
const FormCheck = ({ handleChecked }) => {
  return (
    <>
      <div className="cursor-pointer flex items-end justify-end mb-2 w-full -mt-3">
        <h3 className="text-md font-semibold capitalize ">forget password?</h3>
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
    </>
  );
};

export default FormCheck;
