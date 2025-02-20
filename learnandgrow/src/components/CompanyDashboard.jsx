import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; 

const CompanyDashboard = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("../assets/exampleuser.avif");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("Current User:", user);

      if (user) {
        const companyRef = doc(db, "companies", user.uid);
        const companySnap = await getDoc(companyRef);
        if (companySnap.exists()) {
          const data = companySnap.data();
          console.log("Company Data:", data);
          setCompany(data);
          if (data.profileImage) setProfileImage(data.profileImage);
        } else {
          console.log("No company data found.");
        }
      } else {
        console.log("No authenticated user found.");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      const user = auth.currentUser;
      if (!user) return;

      const companyRef = doc(db, "companies", user.uid);
      await updateDoc(companyRef, { profileImage: base64Image });

      setProfileImage(base64Image);
      setIsModalOpen(false);
    };
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold">Company Dashboard</h2>

      <button
        onClick={handleLogout}
        className="absolute top-4 right-20 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600 transition duration-300"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>

      <div className="absolute top-4 right-4">
        <button onClick={() => setIsModalOpen(true)} className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : company ? (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Company Details</h3>
        </div>
      ) : (
        <p>No company data found.</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Profile Details</h3>
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
            />
            <ul className="list-disc list-inside text-gray-700 mt-4">
              {company && (
                <>
                  <li className="text-gray-700">
                    <span className="font-medium">First Name:</span> {company.firstName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Last Name:</span> {company.lastName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Email:</span> {company.email}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Phone Number:</span> {company.phoneNumber}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Role:</span> {company.role}
                  </li>
                </>
              )}
            </ul>

            <div className="mt-4">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="upload" />
              <label
                htmlFor="upload"
                className="block bg-blue-600 text-white px-4 py-2 text-center rounded-lg cursor-pointer"
              >
                Upload Profile Image
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;