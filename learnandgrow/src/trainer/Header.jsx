import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ profileImage, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md">
      <h2 className="text-2xl font-bold">Trainer Dashboard</h2>
      <div className="flex items-center">
        <button onClick={() => navigate("/profile")} className="relative mr-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </button>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600 transition duration-300"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Header;