import React from 'react'
import { useRouter } from 'next/router'

function CheckPlans() {
  const router = useRouter()

  const navigateToPlans = () => {
    router.push('/plans')
  }

  return (
    <section className="max-w-7xl mx-auto mt-12 p-6 lg:p-12 text-center">
      <div className=" p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
          Discover the Perfect Plan for You
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Whether you&apos;re looking for a free plan or something more, we&apos;ve got you covered. Explore our plans to find the one that fits your needs.
        </p>
        <button
          onClick={navigateToPlans}
          className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300"        >
        
          Check Our Plans
        </button>
      </div>
    </section>
  )
}

export default CheckPlans
