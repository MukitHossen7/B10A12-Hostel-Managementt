import { Link } from "react-router-dom";
import { MdPublish } from "react-icons/md";
import { useState } from "react";
import UpcomingMealModal from "../../../../components/Modal/UpcomingMealModal";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const UpComingMeal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosInstance = useAxiosInstance();
  const { data: upcoming = [] } = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/upcoming-meals-admin`);
      return data;
    },
  });
  console.log(upcoming);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="p-6 md:p-8 min-h-screen ">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold  ">Upcoming Meals</h1>
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add Upcoming Meal
          </button>
        </div>
        <div className="overflow-x-auto shadow-md bg-white rounded-md">
          <table className="min-w-full bg-white border border-gray-100 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Image</th>
                <th className="px-4 py-2 text-left font-medium">Title</th>
                <th className="px-4 py-2 text-left font-medium">Likes</th>
                <th className="px-4 py-2 text-center font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.map((meal) => (
                <tr key={meal._id} className="border-t">
                  <td className="px-4 py-4 text-sm">
                    <img
                      className="w-10 h-10 object-cover rounded-lg"
                      src={meal?.image}
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-4 text-sm">{meal?.title}</td>
                  <td className="px-4 py-4 text-sm">{meal?.likes}</td>

                  <td className="px-4 py-2 text-center flex justify-center ">
                    <Link>
                      <button
                        className="bg-green-100 text-green-500 hover:bg-green-200 p-2 rounded flex items-center"
                        aria-label="View Meal"
                      >
                        <MdPublish className="text-xl" />
                        <span className="font-medium">Publish</span>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpcomingMealModal
        isOpen={isOpen}
        onClose={handleCloseModal}
      ></UpcomingMealModal>
    </div>
  );
};

export default UpComingMeal;
