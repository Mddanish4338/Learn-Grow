import { FaHome, FaUser, FaSignOutAlt, FaClipboardList, FaPlus } from "react-icons/fa";

const Sidebar = ({ currentComponent, setCurrentComponent, onLogout }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-6 text-2xl font-bold">Trainer Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li
            className={`p-4 hover:bg-gray-700 cursor-pointer ${currentComponent === "dashboard" ? "bg-gray-700" : ""}`}
            onClick={() => setCurrentComponent("dashboard")}
          >
            <FaHome className="inline-block mr-2" /> Dashboard
          </li>
          <li
            className={`p-4 hover:bg-gray-700 cursor-pointer ${currentComponent === "profile" ? "bg-gray-700" : ""}`}
            onClick={() => setCurrentComponent("profile")}
          >
            <FaUser className="inline-block mr-2" /> Profile
          </li>
          <li
            className={`p-4 hover:bg-gray-700 cursor-pointer ${currentComponent === "post-mentorship" ? "bg-gray-700" : ""}`}
            onClick={() => setCurrentComponent("post-mentorship")}
          >
            <FaPlus className="inline-block mr-2" /> Post Mentorship
          </li>
          <li
            className={`p-4 hover:bg-gray-700 cursor-pointer ${currentComponent === "posts" ? "bg-gray-700" : ""}`}
            onClick={() => setCurrentComponent("posts")}
          >
            <FaClipboardList className="inline-block mr-2" /> My Posts
          </li>
        </ul>
      </nav>
      <div className="p-4 hover:bg-gray-700 cursor-pointer" onClick={onLogout}>
        <FaSignOutAlt className="inline-block mr-2" /> Logout
      </div>
    </div>
  );
};

export default Sidebar;