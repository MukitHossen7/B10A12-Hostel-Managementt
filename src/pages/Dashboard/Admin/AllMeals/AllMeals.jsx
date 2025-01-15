import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./../../../../hooks/useAxiosInstance";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllMeals = () => {
  const axiosInstance = useAxiosInstance();
  const { user } = useContext(AuthContext);
  const { data: allMeals = [], refetch } = useQuery({
    queryKey: ["allMeals", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/all-meals/${user?.email}`);
      return data;
    },
  });
  //delete data
  const handleDelete = async (deleteId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosInstance.delete(`/delete/meal/${deleteId}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
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
                    <Link to={`/dashboard/view-meals/${meal._id}`}>
                      <button className="px-2 py-1 lg:py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        View
                      </button>
                    </Link>
                    <button className="px-2 py-1 lg:py-2 text-white bg-green-500 rounded hover:bg-green-600">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(meal._id)}
                      className="px-2 py-1 lg:py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    >
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
