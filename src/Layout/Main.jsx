import { useContext, useState } from "react";
import { Menu } from "lucide-react"; // optional, for a toggle icon
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error));
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
        const navItems = [
          
          "Teacher",
          "Students",
          "Parents",
          "Events",
          "Class",
          "Attendance",
          "Exam",
        ];
    return (
        <div className="flex h-screen overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex h-full w-80 flex-col rounded-xl bg-white p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
          <div className="p-4 mb-2">
            <h5 className="text-xl font-semibold text-blue-gray-900">Sidebar</h5>
          </div>
          <nav className="flex flex-col gap-1 p-2 text-base text-blue-gray-700">
            <Link className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer" to={'/'}>
            Dashboard
            </Link>
            {navItems.map((item, idx) => (
  <Link
    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
    key={idx}
    className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer"
  >
    {item}
  </Link>
))}
 <div>
    {
       user ? <>
       <Link onClick={handleLogOut}  className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer">
            LogOut
            </Link>
       </> : <>
       <Link to={'/signin'} className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer" >
            Login
            </Link>
       </>
    }
 </div>


          </nav>
        </aside>
  
        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <aside className="w-64 bg-white p-4 h-full shadow-xl shadow-blue-gray-900/10">
              <div className="mb-4 flex justify-between items-center">
                <h5 className="text-xl font-semibold">Sidebar</h5>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-500">
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-1 text-base text-blue-gray-700">
              <Link className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer" to={'/'}>
            Dashboard
            </Link>
              {navItems.map((item, idx) => (
  <Link
  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
    key={idx}
    className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer"
  >
    {item}
  </Link>
))}
 <div>
    {
       user ? <>
       <Link onClick={handleLogOut}  className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer">
            LogOut
            </Link>
       </> : <>
       <Link to={'/signin'} className="flex items-center p-3 rounded-lg hover:bg-blue-gray-50 transition-colors cursor-pointer" >
            Login
            </Link>
       </>
    }
 </div>
              </nav>
            </aside>
            <div
              className="flex-1 bg-black/30"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
        )}
  
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Topbar for Mobile */}
          <div className="lg:hidden mb-4">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
  
          {/* Content */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    );
};

export default Main;