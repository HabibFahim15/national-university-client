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
        // Replace with your real API endpoint to get the logged-in user's data
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
console.log(currentUser);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        user={user}
        roleItems={currentUser} // Now passing the whole user object
        handleLogOut={handleLogOut}
        onClose={sidebarOpen ? () => setSidebarOpen(false) : null}
      />

      <main className="flex-1 overflow-y-auto">
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden px-4 py-2">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Sticky Navbar */}
        <StickyNavbar />

        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Main;