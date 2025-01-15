import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./../../../../hooks/useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const AllMeals = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: allMeals = [] } = useQuery({
    queryKey: ["allMeals", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/all-meals/${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">All Meals</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Title</th>
                <th className="px-4 py-2 text-left font-medium">Likes</th>
                <th className="px-4 py-2 text-left font-medium">Reviews</th>
                <th className="px-4 py-2 text-left font-medium">Rating</th>
                <th className="px-4 py-2 text-left font-medium">
                  Distributor Name
                </th>
                <th className="px-4 py-2 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allMeals.map((meal) => (
                <tr key={meal._id} className="border-t">
                  <td className="px-4 py-4 text-sm">{meal?.title}</td>
                  <td className="px-4 py-4 text-sm">{meal?.likes}</td>
                  <td className="px-4 py-4 text-sm">{meal?.reviewsCount}</td>
                  <td className="px-4 py-4 text-sm">{meal?.rating}</td>
                  <td className="px-4 py-4 text-sm">
                    {meal?.distributor?.name}
                  </td>
                  <td className="px-4 py-2 text-center flex flex-wrap gap-2 ">
                    <button className="px-2 py-1 lg:py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      View
                    </button>
                    <button className="px-2 py-1 lg:py-2 text-white bg-green-500 rounded hover:bg-green-600">
                      Update
                    </button>
                    <button className="px-2 py-1 lg:py-2 text-white bg-red-500 rounded hover:bg-red-600">
                      Delete
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

export default AllMeals;
