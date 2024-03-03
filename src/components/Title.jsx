import { logo } from '../assets';

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <img src={logo} alt="truck" className="w-16 h-16 lg:w-24 lg:h-24" />
      <h1 className="font-inder uppercase font-bold tracking-wide">
        company name
      </h1>
    </div>
  );
};

export default Title;
