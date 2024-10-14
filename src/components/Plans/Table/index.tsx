import React from 'react'

function Table() {
  return (
    <section className="max-w-7xl mx-auto mt-12 p-6 lg:p-12">
      <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-6">
        Compare Plans
      </h3>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto text-center bg-blue-800 bg-opacity-20 text-white rounded-lg">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-4">Feature</th>
              <th className="p-4">Free</th>
              <th className="p-4">Pro</th>
              <th className="p-4">Premium</th>
            </tr>
          </thead>
          <tbody className="bg-blue-900 bg-opacity-30 text-gray-300">
            <tr>
              <td className="p-4">Number of stories</td>
              <td className="p-4">100+</td>
              <td className="p-4">200+</td>
              <td className="p-4">Unlimited</td>
            </tr>
            <tr>
              <td className="p-4">Customer translations</td>
              <td className="p-4">Basic</td>
              <td className="p-4">Enhanced</td>
              <td className="p-4">Unlimited</td>
            </tr>
            <tr>
              <td className="p-4">Genres</td>
              <td className="p-4">3 genres</td>
              <td className="p-4">5 genres</td>
              <td className="p-4">Exclusive genres</td>
            </tr>
            <tr>
              <td className="p-4">Listen to stories</td>
              <td className="p-4">10+ stories</td>
              <td className="p-4">50+ stories</td>
              <td className="p-4">100+ stories</td>
            </tr>
            <tr>
              <td className="p-4">Offline reading</td>
              <td className="p-4">No</td>
              <td className="p-4">Limited</td>
              <td className="p-4">Yes</td>
            </tr>
            <tr>
              <td className="p-4">Ad-free</td>
              <td className="p-4">No</td>
              <td className="p-4">Reduced ads</td>
              <td className="p-4">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
