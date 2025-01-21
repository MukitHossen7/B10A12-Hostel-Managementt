import { MdPublish } from "react-icons/md";
import { useState } from "react";
import UpcomingMealModal from "../../../../components/Modal/UpcomingMealModal";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpComingMeal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosInstance = useAxiosInstance();
  const { data: upcoming = [], refetch } = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/upcoming-meals-admin`);
      return data;
    },
  });
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handlePublish = async (publishId) => {
    const { data } = await axiosInstance.get(
      `/upcoming-meals-admin/${publishId}`
    );
    if (data.likes >= 10) {
      console.log(publishId);
      await axiosInstance.patch(
        `/update-status-upcoming-meals-admin/${publishId}`
      );
      toast.success("Meal published successfully!");
      refetch();
    } else {
      toast.error("The meal needs to have at least 10 likes to be published!");
    }
  };
  return (
    <div>
      <div className="py-10 px-5 min-h-screen ">
        <Helmet>
          <title>Upcoming Meals || Hostel Management</title>
        </Helmet>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:justify-between mb-5">
          <h1 className="text-2xl font-semibold  ">Upcoming Meals</h1>
          <button
            onClick={handleOpenModal}
            className=" text-gray-100 px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-800"
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
                    <button
                      onClick={() => handlePublish(meal._id)}
                      className="bg-green-100 text-green-500 hover:bg-green-200 p-2 rounded flex items-center"
                      aria-label="View Meal"
                    >
                      <MdPublish className="text-xl" />
                      <span className="font-medium">Publish</span>
                    </button>
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
        refetch={refetch}
      ></UpcomingMealModal>
    </div>
  );
};

export default UpComingMeal;
