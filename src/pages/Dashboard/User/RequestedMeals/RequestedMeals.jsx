import useAxiosInstance from "./../../../../hooks/useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const RequestedMeals = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: requestMeals = [] } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/meal/requested/${user?.email}`
      );
      return data;
    },
  });
  return (
    <div>
      <div className="min-h-screen p-4 md:p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Requested Meals
        </h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table-auto w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Meal Title
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
                  key={meal._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 border-t">{meal?.title}</td>
                  <td className="px-4 py-2 border-t">{meal?.likes}</td>
                  <td className="px-4 py-2 border-t">
                    {meal?.reviews?.length}
                  </td>
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
                    <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors text-sm">
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
