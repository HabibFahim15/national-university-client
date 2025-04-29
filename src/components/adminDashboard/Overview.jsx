import { FaUsers } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
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
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] gap-8 flex justify-start">
        <div className="relative flex items-center justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="transform  -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="none"
              className="dark:stroke-gray-700" // Added dark mode support
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray="250"
              strokeDashoffset="58"
              strokeLinecap="round"
              className="text-red-500 dark:text-red-400 transition-all duration-500"
            />
          </svg>
          <span className="absolute text-black dark:text-white font-bold text-sm">
            65%
          </span>
        </div>

        <div>
          <h1 className="text-4xl mb-3 font-bold">886</h1>
          <h3 className="text-xl font-semibold">Events</h3>
        </div>

        {/* ToDo: there will be a small rounded progress bar and event count */}
      </div>
      <div className="rounded-2xl items-center border py-14 px-12 text-start shadow-lg bg-[#ffffff] flex justify-between">
        {/* ToDo: there will be a small rounded progress bar and Food count */}
      </div>
    </div>
  );
};

export default Overview;
