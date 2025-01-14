import useRole from "../../../hooks/useRole";
import UserProfile from "../User/UserProfile/UserProfile";
import AdminProfile from "./../Admin/AdminProfile/AdminProfile";

const Statistics = () => {
  const [role] = useRole();
  return (
    <div>
      {role === "admin" && <AdminProfile></AdminProfile>}
      {role === "customer" && <UserProfile></UserProfile>}
    </div>
  );
};

export default Statistics;
