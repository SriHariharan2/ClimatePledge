// src/pages/Home.jsx

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import homeImage from '../assets/Cp.jpg'

export const Home = () => {

  const [kpi, setKpi] = useState({
    target: 1000000,
    achieved: 0,
    students: 0,
    professionals: 0,
    others: 0
  });

  useEffect(() => {
    const storedPledges = JSON.parse(localStorage.getItem('pledges')) || [];

    const achieved = storedPledges.length;
    const students = storedPledges.filter(p => p.profile === 'Student').length;
    const professionals = storedPledges.filter(p => p.profile === 'Working Professional').length;
    const others = storedPledges.filter(p => p.profile === 'Other').length;

    setKpi({
      target: 1000000, 
      achieved: achieved,
      students: students,
      professionals: professionals,
      others: others
    });

  }, []);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              Be Cool Enough to Care
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Join millions of others in making a simple promise to our planet. 
              Your pledge is a commitment to a sustainable future.
            </p>
            <Link 
              to="/pledge" 
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
              Take the Pledge
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={homeImage} alt="Planet Earth" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* 2. Live KPIs Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-black">Our Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-2">Target Pledges</h3>
              <p className="text-4xl font-extrabold text-green-600">
                {kpi.target.toLocaleString()}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-2">Pledges Achieved</h3>
              <p className="text-4xl font-extrabold text-blue-600">
                {kpi.achieved.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-2">Pledger Breakdown</h3>
              <p className="text-lg text-gray-700">
                Students: <span className="font-bold">{kpi.students}</span>
              </p>
              <p className="text-lg text-gray-700">
                Professionals: <span className="font-bold">{kpi.professionals}</span>
              </p>
              <p className="text-lg text-gray-700">
                Others: <span className="font-bold">{kpi.others}</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Take Action Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-md px-4 mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-black">Why Your Pledge Matters</h2>
          <p className="text-lg text-gray-600">
            Individual actions, when multiplied by millions, create a powerful wave of change. 
            Your pledge is not just a promise; it's a signal to industries and governments that 
            people demand a sustainable future.
          </p>
        </div>
      </section>
    </div>
  );
};
