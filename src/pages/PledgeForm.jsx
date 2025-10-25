import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PledgeForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', state: '',
    profile: 'Student', commitments: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let newCommitments = [...formData.commitments];
    if (checked) newCommitments.push(value);
    else newCommitments = newCommitments.filter((item) => item !== value);
    setFormData({ ...formData, commitments: newCommitments });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingPledges = JSON.parse(localStorage.getItem('pledges')) || [];
    const newPledge = {
      id: `P-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      name: formData.name,
      state: formData.state,
      profile: formData.profile,
      stars: formData.commitments.length,
    };
    const updatedPledges = [newPledge, ...existingPledges];
    localStorage.setItem('pledges', JSON.stringify(updatedPledges));
    localStorage.setItem('currentPledgerName', formData.name);
    localStorage.setItem('currentPledgerStars', formData.commitments.length);
    navigate('/certificate');
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl px-4 mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-black">
          Take Your Climate Action Pledge
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input 
              type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" 
              placeholder="Your Name" required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="you@example.com" required />
          </div>

          <div>
            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
            <input type="tel" name="mobile" id="mobile" value={formData.mobile} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="9876543210" required />
          </div>

          <div>
            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
            <input type="text" name="state" id="state" value={formData.state} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="e.g., Tamil Nadu" required />
          </div>

          <div>
            <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900">I am a...</label>
            <select id="profile" name="profile" value={formData.profile} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
              <option>Student</option>
              <option>Working Professional</option>
              <option>Other</option>
            </select>
          </div>

          <fieldset>
            <legend className="block mb-2 text-sm font-medium text-gray-900">My Commitments (Choose at least one)</legend>
            <div className="space-y-2">
              <div className="flex items-center">
                <input id="commit1" name="commitments" type="checkbox" value="Reduce Waste" onChange={handleCheckboxChange} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                <label htmlFor="commit1" className="ms-2 text-sm text-gray-900">I will reduce my single-use plastic waste.</label>
              </div>
              <div className="flex items-center">
                <input id="commit2" name="commitments" type="checkbox" value="Save Energy" onChange={handleCheckboxChange} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                <label htmlFor="commit2" className="ms-2 text-sm text-gray-900">I will conserve energy at home and work.</label>
              </div>
              <div className="flex items-center">
                <input id="commit3" name="commitments" type="checkbox" value="Sustainable Transport" onChange={handleCheckboxChange} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                <label htmlFor="commit3" className="ms-2 text-sm text-gray-900">I will use sustainable transport (walk, cycle, public transport) more often.</label>
              </div>
            </div>
          </fieldset>
          
          <p className="text-xs text-gray-500">
            🔒 Your Email & Mobile are required for validation but will **never** be shown publicly. 
            Data is used only for verification and engagement.
          </p>

          <button 
            type="submit"
            disabled={formData.commitments.length === 0}
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Take the Pledge Now
          </button>
        </form>
      </div>
    </section>
  );
};