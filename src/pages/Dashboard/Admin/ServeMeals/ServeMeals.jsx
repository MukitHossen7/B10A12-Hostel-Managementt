import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { FaCheck, FaCheckDouble } from "react-icons/fa";
const ServeMeals = () => {
  const axiosInstance = useAxiosInstance();
  const { data: serves = [], refetch } = useQuery({
    queryKey: ["serves"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/all-serves");
      return data;
    },
  });

  const handleServe = async (serveId) => {
    try {
      await axiosInstance.patch(`/all-serves/status/${serveId}`, {
        status: "Delivered",
      });
    } catch (error) {
      console.log(error);
    } finally {
      refetch();
    }
  };
  return (
    <div className="min-h-screen   py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Serve Meals</h1>
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or title"
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="overflow-x-auto shadow-sm rounded-lg">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  User Email
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  User Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-medium">
                  Status
                </th>
                <th className="px-4 py-2 text-center text-gray-700 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {serves?.length > 0 ? (
                serves?.map((meal) => (
                  <tr
                    key={meal?._id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2">{meal?.title}</td>
                    <td className="px-4 py-2">{meal?.customer?.email}</td>
                    <td className="px-4 py-2">{meal?.customer?.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          meal.status === "Delivered"
                            ? "bg-green-200 text-green-600"
                            : "bg-yellow-200 text-yellow-600"
                        }`}
                      >
                        {meal.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      {meal.status === "Pending" ? (
                        <button
                          onClick={() => handleServe(meal._id)}
                          className="text-yellow-600 hover:text-yellow-600 flex items-center justify-center bg-gray-900 px-3 py-[2px] rounded-full"
                        >
                          <FaCheck className="mr-1" />
                          Serve
                        </button>
                      ) : (
                        <button className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
                          <FaCheckDouble className="mr-1" />
                          Serving
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-gray-500 italic"
                  >
                    No meals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServeMeals;
