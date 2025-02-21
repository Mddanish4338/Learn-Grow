import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Dashboard = ({ trainer, studentsEnrolled }) => {
  // Sample data for the bar chart (number of students enrolled over time)
  const enrollmentData = [
    { month: "Jan", students: 10 },
    { month: "Feb", students: 15 },
    { month: "Mar", students: 20 },
    { month: "Apr", students: 25 },
    { month: "May", students: 30 },
    { month: "Jun", students: 35 },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Trainer Dashboard</h3>

      {/* Trainer Details */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-2">Trainer Details</h4>
        {trainer ? (
          <div className="space-y-2">
            <p>
              <span className="font-medium">First Name:</span> {trainer.firstName}
            </p>
            <p>
              <span className="font-medium">Last Name:</span> {trainer.lastName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {trainer.email}
            </p>
            <p>
              <span className="font-medium">Phone Number:</span> {trainer.phoneNumber}
            </p>
            <p>
              <span className="font-medium">Role:</span> {trainer.role}
            </p>
          </div>
        ) : (
          <p className="text-gray-700">No trainer data found.</p>
        )}
      </div>

      {/* Students Enrolled */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-2">Students Enrolled</h4>
        {studentsEnrolled && studentsEnrolled.length > 0 ? (
          <ul className="space-y-2">
            {studentsEnrolled.map((student, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">
                <span className="font-medium">{student.name}</span> - {student.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No students enrolled yet.</p>
        )}
      </div>

      {/* Enrollment Analytics (Bar Chart) */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-2">Enrollment Analytics</h4>
        <div className="w-full h-64">
          <BarChart
            width={600}
            height={300}
            data={enrollmentData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#3b82f6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;