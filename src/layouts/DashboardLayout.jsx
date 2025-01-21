import { Outlet } from "react-router-dom";
import Sidebar from "./../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">
      <div className="w-full md:w-72 bg-white shadow-md rounded-sm lg:rounded-md border-r border-gray-100">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
