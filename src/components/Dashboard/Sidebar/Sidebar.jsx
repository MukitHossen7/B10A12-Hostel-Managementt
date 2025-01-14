import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-200">
      <Link to="/">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-yellow-500">
            Hostel Manager
          </span>
        </div>
      </Link>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <NavLink to="/dashboard">My Profile</NavLink>
        <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
        <NavLink to="/dashboard/add-meals">Add Meals</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
