import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import StudentDashboard from './components/StudentDashboard';
import TrainerDashboard from './components/TrainerDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import StudentSignupForm from './pages/StudentSignupForm';
import TrainerSignupForm from './pages/TrainerSignupForm';
import CompanySignupForm from './pages/CompanySignupForm';
import VerifyEmail from './pages/VerifyEmail';
import Login from './pages/Login';
import Home from './Home';
import Dashboard from './trainer/Dashboard';
import Profile from './trainer/Profile';
import PostMentorship from './trainer/PostMentorship';
import DisplayPosts from './trainer/DisplayPosts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider/>
          <BrowserRouter>
              <Routes>
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
              <Route path="/company-dashboard" element={<CompanyDashboard />} />
              <Route path="/signup/student" element={<StudentSignupForm />} />
              <Route path="/signup/trainer" element={<TrainerSignupForm />} />
              <Route path="/signup/company" element={<CompanySignupForm />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post-mentorship" element={<PostMentorship />} />
              <Route path="/posts" element={<DisplayPosts />} />
              </Routes>
          </BrowserRouter>

    </>
  )
}

export default App
