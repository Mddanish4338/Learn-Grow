import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const PostMentorship = ({ mentorshipProgram, setMentorshipProgram }) => {
  const [error, setError] = useState(null);

  const onPost = async () => {
    try {
      await addDoc(collection(db, 'mentorshipPrograms'), mentorshipProgram);
      alert('Mentorship program posted successfully!');
      // Clear the fields after successful submission
      setMentorshipProgram({
        title: '',
        description: '',
        skills: '',
        charge: '',
        thumbnail: ''
      });
    } catch (err) {
      console.error('Error adding document: ', err);
      setError('Failed to post mentorship program. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMentorshipProgram({ ...mentorshipProgram, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {mentorshipProgram.thumbnail && (
            <img
              src={mentorshipProgram.thumbnail}
              alt="Thumbnail Preview"
              className="mt-4 w-full h-auto rounded-lg"
            />
          )}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={onPost}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Post Program
        </button>
      </div>
    </div>
  );
};

export default PostMentorship;