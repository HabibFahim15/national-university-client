import { Link } from "react-router-dom";

const Sidebar = ({  handleLogOut, roleItems, onClose }) => {
    // Get role from roleItems prop (which is now the user object)
    const role = roleItems?.role || '';
    
    // Define menu items for each role
    const menuItems = {
        admin: [
            { path: "/admin-dashboard", label: "Dashboard", icon: "🏠" },
            { path: "/users", label: "User Management", icon: "👥" },
            { path: "/courses", label: "Course Management", icon: "📚" },
            { path: "/settings", label: "System Settings", icon: "⚙️" },
            { path: "/reports", label: "Reports", icon: "📊" },
        ],
        teacher: [
            { path: "/techer-dashboard", label: "Dashboard", icon: "🏠" },
            { path: "/my-classes", label: "My Classes", icon: "👨‍🏫" },
            { path: "/assignments", label: "Assignments", icon: "📝" },
            { path: "/grades", label: "Gradebook", icon: "📈" },
            { path: "/attendance", label: "Attendance", icon: "✅" },
        ],
        student: [
            { path: "/student-dashboard", label: "Dashboard", icon: "🏠" },
            { path: "/my-courses", label: "My Courses", icon: "📖" },
            { path: "/assignments", label: "Assignments", icon: "📝" },
            { path: "/grades", label: "My Grades", icon: "📊" },
            { path: "/schedule", label: "Schedule", icon: "🗓️" },
        ],
        parent: [
            { path: "/parent-dashboard", label: "Dashboard", icon: "🏠" },
            { path: "/children", label: "My Children", icon: "👨‍👩‍👧‍👦" },
            { path: "/progress", label: "Progress Reports", icon: "📈" },
            { path: "/attendance", label: "Attendance", icon: "✅" },
            { path: "/messages", label: "Messages", icon: "✉️" },
        ]
    };

    const renderLinks = () => {
        const items = menuItems[role] || [];
        
        return (
            <>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={onClose ? () => onClose() : undefined}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}
                <button
                    onClick={handleLogOut}
                    className="mt-4 flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                    <span className="text-lg">🚪</span>
                    <span>Logout</span>
                </button>
            </>
        );
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex h-full w-64 flex-col bg-white p-4 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                    <h5 className="text-xl font-semibold">Welcome, {roleItems?.name || 'User'}</h5>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {role}
                    </span>
                </div>
                <nav className="flex flex-col gap-1">{renderLinks()}</nav>
            </aside>

            {/* Mobile Sidebar */}
            {onClose && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <aside className="w-64 bg-white p-4 shadow-lg z-50">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <h5 className="text-xl font-semibold">{roleItems?.name || 'User'}</h5>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                    {role}
                                </span>
                            </div>
                            <button onClick={onClose}>✕</button>
                        </div>
                        <nav className="flex flex-col gap-1">{renderLinks()}</nav>
                    </aside>
                    <div className="flex-1 bg-black/30" onClick={onClose} />
                </div>
            )}
        </>
    );
};

export default Sidebar;