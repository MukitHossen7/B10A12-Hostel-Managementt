import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { FaEye, FaThumbsUp, FaTrashAlt } from "react-icons/fa";

const AllReviews = () => {
  const axiosInstance = useAxiosInstance();
  const { data: allReviews = [] } = useQuery({
    queryKey: ["all-reviews"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/get-admin-reviews`);
      return data;
    },
  });
  console.log(allReviews);
  return (
    <div>
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">All Reviews</h1>
        <div className="overflow-x-auto shadow-md bg-white rounded-md">
          <table className="min-w-full bg-white border border-gray-100 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Meal Title</th>
                <th className="py-3 px-4 font-medium">Likes</th>
                <th className="py-3 px-4 font-medium">Reviews Count</th>
                <th className="py-3 px-4 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allReviews.map((review) => (
                <tr
                  key={review?._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 text-sm">
                    {review?.foodData?.title}
                  </td>
                  <td className="py-3 px-4 text-sm flex justify-center">
                    <FaThumbsUp className="text-blue-500 mr-1" />
                    {review?.foodData?.likes}
                  </td>
                  <td className="py-3 px-4 text-sm text-center font-medium">
                    {review?.foodData?.review + 1}
                  </td>
                  <td className="py-3 px-4 text-sm flex justify-center space-x-4">
                    <button className="bg-green-100 text-green-500 hover:bg-green-200 p-2 rounded transition ">
                      <FaEye className="" />
                    </button>
                    <button className="bg-red-100 text-red-500 hover:bg-red-200 p-2 rounded transition">
                      <FaTrashAlt className="" />
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

export default AllReviews;
