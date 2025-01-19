import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const { data: users } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/user/${user?.email}`);
      return data;
    },
  });
  console.log(users);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        {/* Profile Banner */}
        <div className="relative bg-gradient-to-r from-teal-400 to-cyan-500 h-48 flex items-center justify-between px-10">
          <div className="text-white">
            <h1 className="text-xl md:text-2xl font-bold">
              Hostel Management System
            </h1>
            <p className="mt-1 mb-3 md:mb-0">
              Ensuring seamless hostel operations
            </p>
          </div>
          <img
            src="https://via.placeholder.com/100x100"
            alt="Hostel Icon"
            className="w-14 md:w-20 lg:w-24 h-14 md:h-20 lg:h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Profile Section */}
        <div className="relative">
          {/* Profile Picture */}
          <div className="absolute -top-12 left-8">
            <img
              src={users?.photo || "https://via.placeholder.com/150"}
              alt="User"
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* User Info */}
          <div className="pt-16 px-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {users?.name || "User Name"}
            </h2>
            <p className="text-gray-600">
              {users?.email || "user@example.com"}
            </p>
            <div className="mt-2 flex gap-3">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                  users?.badge === "Gold"
                    ? "bg-[#FFD700]"
                    : users?.badge === "Silver"
                    ? "bg-[#b0aeae]"
                    : users?.badge === "Platinum"
                    ? "bg-[#e5e4e2] text-gray-900"
                    : "bg-orange-400" // Default for Bronze
                }`}
              >
                {users?.badge} Member
              </span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 px-8">
          <h3 className="text-xl font-semibold text-gray-700">About Me</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Hi, I am {users?.name}, a dedicated user of the Hostel Management
            website.The website helps me stay organized with meals and other
            essentials, maintain operational efficiency, and contribute to a
            positive and comfortable living experience for everyone in the
            hostel.
          </p>
        </div>

        {/* Key Statistics */}
        {/* <div className="mt-6 px-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Key Statistics
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-teal-100 p-4 rounded-lg shadow">
              <h4 className="text-teal-600 text-lg font-semibold">
                Meals Managed
              </h4>
              <p className="text-2xl font-bold text-gray-800">
                {user.mealsManaged || 0}
              </p>
            </div>
            <div className="bg-cyan-100 p-4 rounded-lg shadow">
              <h4 className="text-cyan-600 text-lg font-semibold">
                Reviews Moderated
              </h4>
              <p className="text-2xl font-bold text-gray-800">
                {user.reviewsModerated || 0}
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <h4 className="text-yellow-600 text-lg font-semibold">
                Years of Service
              </h4>
              <p className="text-2xl font-bold text-gray-800">
                {user.yearsOfService || 0}
              </p>
            </div>
          </div>
        </div> */}

        {/* Footer Section */}
        <div className="mt-8 px-8 pb-6">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-md shadow hover:bg-teal-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
