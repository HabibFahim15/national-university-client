import { FaUsers } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
const Overview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
                <div>
                <h1 className="text-3xl font-semibold">9825</h1>
                <h4 className="text-md font-semibold">total Students</h4>
                <p className="text-gray-600"><span className="text-green-600 font-medium">+5%</span> than last month</p>
                </div>
                <FaUsers className="text-6xl text-[#1e33f2]" />
            </div>
            <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
                <div>
                <h1 className="text-3xl font-semibold">682</h1>
                <h4 className="text-md font-semibold">total Students</h4>
                <p className="text-gray-600"><span className="text-red-600 font-medium">-2%</span> than last month</p>
                </div>
                <FaGraduationCap className="text-6xl text-[#1e33f2]" />
            </div>
            <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
               

                {/* ToDo: there will be a small rounded progress bar and event count */}

            </div>
            <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
                {/* ToDo: there will be a small rounded progress bar and Food count */}
            </div>
            
        </div>
    );
};

export default Overview;