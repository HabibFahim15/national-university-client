// Main.jsx
import { useContext, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { StickyNavbar } from "../components/StickyNavbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const { user, logOut } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogOut = () => logOut().catch(console.log);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${user?.email}`);
        const data = await res.json();
        setCurrentUser(data);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    if (user?.email) {
      fetchCurrentUser();
    }
  }, [user]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f9f9f9]">
      <Sidebar
        user={user}
        roleItems={currentUser}
        handleLogOut={handleLogOut}
        onClose={sidebarOpen ? () => setSidebarOpen(false) : null}
      />
      
      <main className="flex-1 overflow-y-auto">
        {/* Combined Mobile Header */}
        <div className="lg:hidden sticky top-0 z-50 bg-white shadow">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">School Management</h1>
            <div className="w-6"></div> {/* Spacer for balance */}
          </div>
        </div>

        {/* Desktop Navbar */}
        <StickyNavbar />

        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Main;