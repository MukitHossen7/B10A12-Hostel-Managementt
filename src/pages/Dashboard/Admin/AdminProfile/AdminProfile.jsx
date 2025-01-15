import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const { data: admin } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/admin/${user?.email}`);
      return data;
    },
  });

  return (
    <div>
      <div className=" flex items-center justify-center py-12 md:py-20">
        <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
          {/* Profile Banner */}
          <div className="h-40 w-full bg-green-500 rounded-t-lg relative">
            <div className="absolute -bottom-12 left-8">
              <img
                src={admin?.photo}
                alt="Admin"
                className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-16 ml-8">
            <h2 className="text-3xl font-bold text-gray-800">{admin?.name}</h2>
            <p className="text-gray-600">{admin?.email}</p>
            <div className="mt-4">
              <span className="text-gray-500 text-sm">Meals Added:</span>
              <span className="ml-2 text-lg font-bold text-green-600">120</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gray-100 p-6 rounded-b-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              About the Admin
            </h3>
            <p className="text-gray-600">
              {admin?.name} is the head administrator of Sarah Hostel Management
              System. She oversees meal services and ensures smooth operations
              for all residents with dedication and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
