import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <MoonLoader color="#d80000" size={100} />
      </div>
    </div>
  );
};

export default Spinner;
