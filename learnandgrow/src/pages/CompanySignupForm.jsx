import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, deleteUser } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import company_img from "../assets/company-image.png"; 

const CompanySignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyDescription: "",
    companySize: "",
    companyType: "",
  });

  const [verificationMessage, setVerificationMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      setVerificationMessage("A verification email has been sent. Please check your inbox.");

      const userData = {
        email: formData.email,
        phone: formData.phone,
        role: "company",
        uid: user.uid,
        companyName: formData.companyName,
        companyDescription: formData.companyDescription,
        companySize: formData.companySize,
        companyType: formData.companyType,
      };

      const userDocRef = doc(db, "companies", user.uid);
      await setDoc(userDocRef, userData);

      console.log("Document written with ID: ", user.uid);

      navigate("/verify-email");

      setTimeout(async () => {
        await user.reload();
        if (!user.emailVerified) {
          await deleteUser(user);
          console.log("Unverified user deleted");
        }
      }, 600000); 
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src={company_img} 
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="company-img"
          />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-[#FBF6E9] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSignup}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#FF6600]">Companies Create an account</h3>
            </div>

            <div>
              <label className="text-black text-xs block mb-2">Company Name</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter company name"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Company Description</label>
              <div className="relative flex items-center">
                <textarea
                  name="companyDescription"
                  placeholder="Enter company description"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Company Size</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="companySize"
                  placeholder="Enter company size"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Company Type</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="companyType"
                  placeholder="Enter company type"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Phone Number</label>
              <div className="relative flex items-center">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-black text-xs block mb-2">Confirm Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full bg-transparent text-sm text-black border-b border-gray-300 focus:border-[#FF6600] pl-2 pr-8 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded accent-[#FF6600]"
                required
              />
              <label htmlFor="remember-me" className="text-black ml-3 block text-sm">
                I accept the{" "}
                <a href="/" className="text-[#FF6600] font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded bg-[#FF6600] hover:bg-[#FF7F3E] focus:outline-none"
              >
                Register
              </button>
            </div>

            {verificationMessage && (
              <p className="text-sm text-green-500 mt-4">{verificationMessage}</p>
            )}

            <p className="text-sm text-black mt-8">
              Already have an account?{" "}
              <a href="/login" className="text-[#FF6600] font-semibold hover:underline ml-1">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySignupForm;