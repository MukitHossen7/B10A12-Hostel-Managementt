import { useQuery } from "@tanstack/react-query";
import { FaSearch, FaUserShield } from "react-icons/fa";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosInstance = useAxiosInstance();
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users`);
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FadeLoader color="#10e14b" />
      </div>
    );
  const handleAdmin = async (id) => {
    try {
      await axiosInstance.patch(`/users/role/${id}`, { role: "admin" });
      toast.success("Wow! New admin created successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      refetch();
    }
  };
  return (
    <div className="">
      <div className="p-4 md:p-8 min-h-screen container mx-auto bg-gray-50">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h1>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search by username or email"
            className="w-full md:w-1/3 p-2 border rounded-l-md focus:outline-none focus:ring-1  focus:ring-gray-500"
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            title="Search"
          >
            <FaSearch />
          </button>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-2xl rounded-lg text-gray-700">
            <thead className="text-gray-600 border-b">
              <tr className="">
                <th className="p-3 text-left font-medium">Username</th>
                <th className="p-3 text-left font-medium">Email</th>
                <th className="p-3 text-left font-medium">Subscription</th>
                <th className="p-3 text-left font-medium">Role</th>
                <th className="p-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder Rows */}
              {allUsers.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user?.name}</td>
                  <td className="p-3">{user?.email}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 rounded-full py-1 text-sm font-semibold text-white ${
                        user?.badge === "Gold"
                          ? "bg-[#FFD700]"
                          : user?.badge === "Silver"
                          ? "bg-[#C0C0C0,]"
                          : user?.badge === "Platinum"
                          ? "bg-[#e5e4e2]"
                          : "bg-orange-400" // Default for Bronze
                      }`}
                    >
                      {user?.badge}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 rounded-full py-1 text-sm font-semibold text-white ${
                        user?.role === "admin" ? "bg-green-600" : "bg-gray-800" // Default for Bronze
                      }`}
                    >
                      {" "}
                      {user?.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleAdmin(user._id)}
                      disabled={user?.role === "admin"}
                      className={`px-4 py-2 bg-gray-900 text-yellow-500 rounded-md hover:bg-gray-900 ${
                        user?.role === "admin" ? "cursor-not-allowed" : ""
                      }`}
                    >
                      <FaUserShield className="inline mr-2" />
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
