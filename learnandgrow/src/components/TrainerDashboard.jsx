
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const TrainerDashboard = () => {
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("/default-avatar.png");
  const [isProfilePageOpen, setIsProfilePageOpen] = useState(false);
  const [mentorshipProgram, setMentorshipProgram] = useState({
    title: "",
    description: "",
    skills: "",
    charge: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const trainerRef = doc(db, "trainers", user.uid);
        const trainerSnap = await getDoc(trainerRef);
        if (trainerSnap.exists()) {
          const data = trainerSnap.data();
          setTrainer(data);
          if (data.profileImage) setProfileImage(data.profileImage);
        }
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

      const trainerRef = doc(db, "trainers", user.uid);
      await updateDoc(trainerRef, { profileImage: base64Image });

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

  const handlePostMentorshipProgram = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const mentorshipRef = collection(db, "mentorshipPrograms");
    await addDoc(mentorshipRef, {
      ...mentorshipProgram,
      trainerId: user.uid
    });

    setMentorshipProgram({
      title: "",
      description: "",
      skills: "",
      charge: ""
    });
  };

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold">Trainer Dashboard</h2>

      <button
        onClick={handleLogout}
        className="absolute top-4 right-20 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600 transition duration-300"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </button>

      <div className="absolute top-4 right-4">
        <button onClick={() => setIsProfilePageOpen(true)} className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
          />
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : trainer ? (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Trainer Details</h3>
          <button
            onClick={() => setIsProfilePageOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Profile Page
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4"
          >
            Post Mentorship Program
          </button>
        </div>
      ) : (
        <p>No trainer data found.</p>
      )}

      {isProfilePageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={() => setIsProfilePageOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Profile Page</h3>
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
            />
            <ul className="list-disc list-inside text-gray-700 mt-4">
              {trainer && (
                <>
                  <li className="text-gray-700">
                    <span className="font-medium">First Name:</span> {trainer.firstName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Last Name:</span> {trainer.lastName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Email:</span> {trainer.email}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Phone Number:</span> {trainer.phoneNumber}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Role:</span> {trainer.role}
                  </li>
                </>
              )}
            </ul>
            <button
              onClick={() => window.location.href = `https://wa.me/${trainer.phoneNumber}`}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
            >
              Connect on WhatsApp
            </button>
          </div>
        </div>
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
              {trainer && (
                <>
                  <li className="text-gray-700">
                    <span className="font-medium">First Name:</span> {trainer.firstName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Last Name:</span> {trainer.lastName}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Email:</span> {trainer.email}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Phone Number:</span> {trainer.phoneNumber}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Role:</span> {trainer.role}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Post Mentorship Program</h3>
            <input
              type="text"
              placeholder="Title"
              value={mentorshipProgram.title}
              onChange={(e) => setMentorshipProgram({ ...mentorshipProgram, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <textarea
              placeholder="Description"
              value={mentorshipProgram.description}
              onChange={(e) => setMentorshipProgram({ ...mentorshipProgram, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Skills"
              value={mentorshipProgram.skills}
              onChange={(e) => setMentorshipProgram({ ...mentorshipProgram, skills: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Charge in Rupees"
              value={mentorshipProgram.charge}
              onChange={(e) => setMentorshipProgram({ ...mentorshipProgram, charge: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handlePostMentorshipProgram}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Post Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerDashboard;