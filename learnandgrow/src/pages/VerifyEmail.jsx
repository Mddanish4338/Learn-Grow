import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerification = setInterval(async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(checkEmailVerification);
          navigate("/login");
        }
      }
    }, 5000); 

    return () => clearInterval(checkEmailVerification);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
        <p className="mb-4">A verification email has been sent to your inbox. Please verify your email to continue.</p>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Gmail
        </a>
      </div>
    </div>
  );
};

export default VerifyEmail;