import useAxiosInstance from "./../../../../hooks/useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const RequestedMeals = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: requestMeals = [], refetch } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/meal/requested/${user?.email}`
      );
      return data;
    },
  });
  console.log(requestMeals);
  const handleCancel = async (cancelId) => {
    try {
      await axiosInstance.delete(`/request-meal/cancel/${cancelId}`);
      toast.success("Order Cancelled successfully");
    } catch (error) {
      console.log(error);
    } finally {
      refetch();
    }
  };
  return (
    <div>
      <div className="min-h-screen py-10 px-5">
        <h1 className="text-2xl font-semibold text-gray-800 r mb-6">
          Requested Meals
        </h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="table-auto w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Meal
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Likes
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Reviews
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Status
                </th>
                <th className="px-4 py-2 text-center text-gray-700 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {requestMeals?.map((meal) => (
                <tr
                  key={meal?._id}
                  className="hover:bg-gray-50 text-sm transition-colors"
                >
                  <td className="px-4 py-2 border-t">{meal?.title}</td>
                  <td className="px-4 py-2 border-t">{meal?.likes}</td>
                  <td className="px-4 py-2 border-t">{meal?.reviews}</td>
                  <td
                    className={`px-4 py-2 border-t ${
                      meal?.status === "Delivered"
                        ? "text-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {meal?.status}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    <button
                      onClick={() => handleCancel(meal?._id)}
                      disabled={meal?.status === "Delivered"}
                      className={`bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors text-sm ${
                        meal?.status === "Delivered" &&
                        "hover:cursor-not-allowed"
                      }`}
                    >
                      Cancel
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

export default RequestedMeals;
