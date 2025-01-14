import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosInstance from "./useAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const { data: role } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/user/role/${user?.email}`);
      return data;
    },
  });
  return [role];
};

export default useRole;
