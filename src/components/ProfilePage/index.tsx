import React from 'react';

interface ProfilePageProps {
  username: string;
  dayStreak: number;
  totalXP: number;
  topFinishes: number;
  following: number;
  followers: number;
  joinedDate: string;
  favoriteGenres: string[];
}

const ProfilePage = ({
  username,
  dayStreak,
  totalXP,
  topFinishes,
  following,
  followers,
  joinedDate,
  favoriteGenres,
}: ProfilePageProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-6">
        <div className="inline-block w-32 h-32 overflow-hidden rounded-full border-4 border-gray-300 relative">
          <img
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${username}`}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold mt-4">{username}</h1>
        <p className="text-gray-600">Joined {joinedDate}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">{dayStreak}</p>
            <p className="text-gray-600">Day Streak</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">{totalXP}</p>
            <p className="text-gray-600">Total XP</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">{topFinishes}</p>
            <p className="text-gray-600">Top 3 Finishes</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">{following}</p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg text-center">
            <p className="text-2xl font-semibold">{followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Favorite Genres</h2>
        <div className="flex flex-wrap gap-2">
          {favoriteGenres.map((genre, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
