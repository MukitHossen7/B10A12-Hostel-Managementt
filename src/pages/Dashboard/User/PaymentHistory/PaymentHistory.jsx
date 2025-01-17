import { useContext } from "react";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/payment/history/${user?.email}`
      );
      return data;
    },
  });
  return (
    <div>
      <div className="min-h-screen py-10 px-5">
        <h1 className="text-2xl font-bold text-center mb-6">Payment History</h1>

        {payments && payments?.length > 0 ? (
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="table-auto  w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">
                    Transaction ID
                  </th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">
                    Packages
                  </th>
                  <th className="px-4 py-3 text-left text-gray-700 font-medium">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((payment) => (
                  <tr
                    key={payment?._id}
                    className="border-b hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 py-2">{payment?.customer?.email}</td>
                    <td className="px-4 py-2">{payment?.customer?.name}</td>
                    <td className="px-4 py-2">{payment?.transactionId}</td>
                    <td className="px-4 py-2">{payment?.packageName}</td>
                    <td className="px-4 py-2">${payment?.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center bg-red-100 text-red-600 p-4 rounded-lg shadow-md">
            <p className="text-2xl">No payment history found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
