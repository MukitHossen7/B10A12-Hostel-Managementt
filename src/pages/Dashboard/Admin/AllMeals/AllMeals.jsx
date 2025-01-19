import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./../../../../hooks/useAxiosInstance";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useState } from "react";
import AllMealsModal from "../../../../components/Modal/AllMealsModal";

const AllMeals = () => {
  const axiosInstance = useAxiosInstance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [currentMeal, setCurrentMeal] = useState({});
  const { data: allMeals = [], refetch } = useQuery({
    queryKey: ["allMeals", sortOption],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/all-meals-admin?sortBy=${sortOption}`
      );
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
  const handleEditClick = (meal) => {
    setCurrentMeal(meal);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentMeal(null);
  };

  return (
    <div>
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">All Meals</h1>
        <div className="flex justify-start gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded ${
              sortOption === "likes" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSortOption("likes")}
          >
            Sort by Likes
          </button>
          <button
            className={`px-4 py-2 rounded ${
              sortOption === "reviews"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSortOption("reviews")}
          >
            Sort by Reviews
          </button>
        </div>
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
                  <td className="px-4 py-4 text-sm">{meal?.reviews}</td>
                  <td className="px-4 py-4 text-sm">{meal?.averageRating}</td>
                  <td className="px-4 py-4 text-sm">
                    {meal?.distributor?.name}
                  </td>
                  <td className="px-4 py-2 text-center flex flex-wrap gap-2 ">
                    <Link to={`/dashboard/view-meals/${meal._id}`}>
                      <button
                        className="bg-green-100 text-green-500 hover:bg-green-200 p-2 rounded"
                        aria-label="View Meal"
                      >
                        <FaEye />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleEditClick(meal)}
                      className="bg-blue-100 text-blue-500 hover:bg-blue-200 p-2 rounded"
                      aria-label="Edit Review"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(meal._id)}
                      className="bg-red-100 text-red-500 hover:bg-red-200 p-2 rounded"
                      aria-label="Delete Review"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AllMealsModal
        isOpen={isModalOpen}
        refetch={refetch}
        onClose={handleModalClose}
        currentMeal={currentMeal}
      ></AllMealsModal>
    </div>
  );
};

export default AllMeals;
