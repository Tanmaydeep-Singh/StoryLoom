import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-gray-700 bg-opacity-80 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative w-full h-40 sm:h-44 md:h-48 bg-gray-600"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
