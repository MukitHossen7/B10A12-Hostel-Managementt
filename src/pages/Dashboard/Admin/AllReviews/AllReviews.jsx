import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";

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
      <h2>All Reviews Page</h2>
    </div>
  );
};

export default AllReviews;
