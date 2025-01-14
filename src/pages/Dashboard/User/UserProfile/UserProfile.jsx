const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    image: "https://via.placeholder.com/150",
    badges: ["Bronze", "Gold"],
  };
  return (
    <div>
      <div className="flex items-center justify-center py-20">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <div className="flex flex-col items-center">
            <img
              src={user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Badges</h3>
            <div className="flex gap-2 flex-wrap">
              {user.badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-white bg-indigo-500 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
