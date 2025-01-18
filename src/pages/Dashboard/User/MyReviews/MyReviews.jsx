import { useContext } from "react";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const MyReviews = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: allReviews = [] } = useQuery({
    queryKey: ["allReviews", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/reviews/user/${user?.email}`);
      return data;
    },
  });
  console.log(allReviews);
  return (
    <div>
      <div className="min-h-screen  py-10 px-5">
        <div className="mx-auto">
          <h1 className="text-2xl font-semibold mb-6">My Reviews</h1>
          <div className="overflow-x-auto shadow-sm rounded-lg">
            <table className="table-auto w-full  bg-white border border-gray-100">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">
                    Meal Title
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">
                    Likes
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">
                    Review
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {allReviews.map((review) => (
                  <tr
                    key={review._id}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 py-2">{review?.foodData?.title}</td>
                    <td className="px-4 py-2">{review?.foodData?.likes}</td>
                    <td className="px-4 py-2">{review?.description}</td>
                    <td className="px-4 py-2 flex items-center space-x-2">
                      <button
                        className="bg-blue-100 text-blue-500 hover:bg-blue-200 p-2 rounded"
                        aria-label="Edit Review"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-red-100 text-red-500 hover:bg-red-200 p-2 rounded"
                        aria-label="Delete Review"
                      >
                        <FaTrash />
                      </button>
                      <button
                        className="bg-green-100 text-green-500 hover:bg-green-200 p-2 rounded"
                        aria-label="View Meal"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
