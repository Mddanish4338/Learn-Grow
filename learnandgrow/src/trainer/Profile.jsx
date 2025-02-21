import React from "react";

const Profile = ({ trainer, profileImage, onFileChange }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Trainer Details */}
        {trainer ? (
          <div>
            <h3 className="text-2xl font-bold mb-6">Trainer Profile</h3>
            <div className="flex flex-col items-center text-center mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <h1 className="text-3xl font-bold mt-4">
                {trainer.firstName} {trainer.lastName}
              </h1>
              <p className="text-gray-600">{trainer.role}</p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-medium">First Name:</span> {trainer.firstName}
              </div>
              <div>
                <span className="font-medium">Last Name:</span> {trainer.lastName}
              </div>
              <div>
                <span className="font-medium">Email:</span> {trainer.email}
              </div>
              <div>
                <span className="font-medium">Phone Number:</span> {trainer.phoneNumber}
              </div>
              <div>
                <span className="font-medium">Role:</span> {trainer.role}
              </div>
            </div>

            {/* Profile Image Upload */}
            <div className="mt-8">
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
                id="upload"
              />
              <label
                htmlFor="upload"
                className="block bg-blue-600 text-white px-4 py-2 text-center rounded-lg cursor-pointer"
              >
                Upload Profile Image
              </label>
            </div>
          </div>
        ) : (
          <p className="text-gray-700">No trainer data found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;