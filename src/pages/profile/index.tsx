import ProfilePage from "@/components/ProfilePage";

const Profile = () => {
  const mockUser = {
    username: 'Tanmay',
    dayStreak: 7, // Assuming a total day streak number
    totalXP: 18045, // Total XP
    topFinishes: 5, // Top 3 finishes
    following: 6, // Following count
    followers: 5, // Followers count
    joinedDate: 'September 2019', // Join date
    favoriteGenres: ['Fantasy', 'Sci-Fi', 'Mystery'], // Favorite genres
  };

  return (
    <div className="min-h-screen py-12">
      <ProfilePage {...mockUser} />
    </div>
  );
};

export default Profile;
