import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PledgeWall = () => {
  const [pledges, setPledges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const storedPledges = JSON.parse(localStorage.getItem('pledges')) || [];
      setPledges(storedPledges);
      setIsLoading(false);
    }, 500); 
  }, []); 

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-black">
          Public Pledge Wall
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          See who else is cool enough to care. (Your email & mobile are never shown).
        </p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Pledge ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">State</th>
                <th scope="col" className="px-6 py-3">Profile</th>
                <th scope="col" className="px-6 py-3">⭐ Rating</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr className="bg-white border-b">
                  <td colSpan="6" className="px-6 py-4 text-center">
                    Loading pledges...
                  </td>
                </tr>
              )}

              {!isLoading && pledges.length === 0 && (
                <tr className="bg-white border-b">
                  <td colSpan="6" className="px-6 py-4 text-center">
                    Be the first to take the pledge! 
                    <Link to="/pledge" className="text-green-600 hover:underline ml-1">
                      Take it now.
                    </Link>
                  </td>
                </tr>
              )}

              {!isLoading && pledges.map((pledge) => (
                <tr 
                  key={pledge.id} 
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {pledge.id}
                  </th>
                  <td className="px-6 py-4">{pledge.name}</td>
                  <td className="px-6 py-4">{pledge.date}</td>
                  <td className="px-6 py-4">{pledge.state}</td>
                  <td className="px-6 py-4">{pledge.profile}</td>
                  <td className="px-6 py-4">{'⭐'.repeat(pledge.stars)}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};