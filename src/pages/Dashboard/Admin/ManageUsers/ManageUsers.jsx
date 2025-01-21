import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
// import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const axiosInstance = useAxiosInstance();
  const [search, setSearch] = useState("");
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers", search],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users?search=${search}`);
      return data;
    },
    enabled: true,
  });

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

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    refetch();
  };
  return (
    <div className="">
      <div className="min-h-screen py-10 px-5">
        <Helmet>
          <title>Manage Users || Hostel Management</title>
        </Helmet>
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Manage Users
        </h1>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search by username or email"
            className="w-full lg:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-1  focus:ring-gray-500"
          />
        </div>

        {/* User Table */}
        <div className="overflow-x-auto shadow-md bg-white rounded-md">
          <table className="table-auto w-full text-gray-800 bg-white border border-gray-100 rounded-lg shadow-lg">
            <thead className="text-gray-700 border-b">
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
                      className={`px-3 rounded-full py-1 text-sm ${
                        user?.badge === "Gold"
                          ? "bg-amber-300 text-gray-800"
                          : user?.badge === "Silver"
                          ? "bg-gray-200 text-gray-800"
                          : user?.badge === "Platinum"
                          ? "bg-blue-300 text-gray-800"
                          : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      {user?.badge}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 rounded-full py-1 text-sm  text-gray-100 ${
                        user?.role === "admin" ? "bg-green-500" : "bg-blue-500"
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
                      className={`px-4 py-2 flex items-center gap-[2px] text-gray-100 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 ${
                        user?.role === "admin" ? "cursor-not-allowed" : ""
                      }`}
                    >
                      <FaUserShield />
                      Admin
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
