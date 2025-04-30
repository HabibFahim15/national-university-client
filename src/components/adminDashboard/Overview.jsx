import { FaUsers } from "react-icons/fa6";
import { FaGraduationCap,FaRegMoneyBill1 } from "react-icons/fa6";
import { RiParentFill } from "react-icons/ri";
const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">9825</h1>
          <h4 className="text-md font-semibold">total Students</h4>
          <p className="text-gray-600">
            <span className="text-green-600 font-medium">+5%</span> than last
            month
          </p>
        </div>
        <FaUsers className="text-6xl text-[#1e33f2]" />
      </div>
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">682</h1>
          <h4 className="text-md font-semibold">total Students</h4>
          <p className="text-gray-600">
            <span className="text-red-600 font-medium">-2%</span> than last
            month
          </p>
        </div>
        <FaGraduationCap className="text-6xl text-[#1e33f2]" />
      </div>
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
        <div>
        <h4 className="text-xl text-gray-600 font-semibold">Total Parents</h4>
        <h1 className="text-4xl font-semibold">4398</h1>
          
        </div>
        <RiParentFill className="text-6xl text-red-600" />
      </div>
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
        <div>
        <h4 className="text-xl text-gray-600 font-semibold">Earning</h4>
          <h1 className="text-3xl font-semibold">$195482</h1>
          
         
        </div>
        <FaRegMoneyBill1 className="text-6xl text-green-600" />
      </div>
      
      
    </div>
  );
};

export default Overview;
