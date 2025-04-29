import { Link } from 'react-router-dom';
import { IoMdPersonAdd } from "react-icons/io";

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='text-start'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold'>Dashboard</h1>
                <p className='text-gray-600 font-medium text-lg'>Hello welcome Back </p>
            </div>
            <div>
                <Link className='text-[#ffffff] flex item-center justify-around gap-1 md:gap-2 border rounded-full bg-[#1e33f2] md:text-xl  px-6 py-3 md:px-12 md:py-5 font-semibold'>
                    <span className='md:text-2xl text-xl font-semibold md:font-bold'>
                        <IoMdPersonAdd />
                    </span>
                    <span>New Admission</span> 
                </Link>
            </div>
        </div>
    );
};

export default Header;