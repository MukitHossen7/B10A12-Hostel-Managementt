import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRole();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* mobile devices */}
      <div className="md:hidden">
        {/* Hamburger Icon for Mobile Devices */}
        <div className="md:hidden flex items-center justify-between p-4 ">
          <Link to="/">
            <span className="text-2xl font-bold text-yellow-500">
              Hostel Manager
            </span>
          </Link>
          <button onClick={toggleSidebar} className="text-2xl text-yellow-500">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:flex md:flex-col w-64`}
        >
          <Link to="/" className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-yellow-500">
                Hostel Manager
              </span>
            </div>
          </Link>
          {role === "admin" && (
            <div className="flex flex-col justify-between flex-1 space-y-4 mt-8">
              <NavLink
                to="/dashboard/admin-profile"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Admin Profile
              </NavLink>
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Manage Users
              </NavLink>
              <NavLink
                to="/dashboard/add-meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Add Meals
              </NavLink>
              <NavLink
                to="/dashboard/all-meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                All Meals
              </NavLink>
              <NavLink
                to="/dashboard/all-reviews"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                All Reviews
              </NavLink>
              <NavLink
                to="/dashboard/serve-meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Serve Meals
              </NavLink>
              <NavLink
                to="/dashboard/coming-meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Upcoming Meals
              </NavLink>
            </div>
          )}
          {role === "customer" && (
            <div className="flex flex-col justify-between flex-1 space-y-4 mt-8">
              <NavLink
                to="/dashboard/user-profile"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                My Profile
              </NavLink>
              <NavLink
                to="/dashboard/requested-meals"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Requested Meals
              </NavLink>
              <NavLink
                to="/dashboard/my-reviews"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                My Reviews
              </NavLink>
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-100 font-bold text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }
              >
                Payment History
              </NavLink>
            </div>
          )}
        </div>

        {/* Overlay for Sidebar when open in Mobile Devices */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>

      {/* Desktop Devices */}
      <div className="hidden md:flex md:flex-col md:h-full px-8 mt-7">
        <Link to="/">
          <span className="text-2xl font-bold text-yellow-500">
            Hostel Manager
          </span>
        </Link>
        {role === "admin" && (
          <div className="flex flex-col justify-between flex-1 space-y-4 mt-8">
            <NavLink
              to="/dashboard/admin-profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Admin Profile
            </NavLink>
            <NavLink
              to="/dashboard/manage-users"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Manage Users
            </NavLink>
            <NavLink
              to="/dashboard/add-meals"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Add Meals
            </NavLink>
            <NavLink
              to="/dashboard/all-meals"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              All Meals
            </NavLink>
            <NavLink
              to="/dashboard/all-reviews"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              All Reviews
            </NavLink>
            <NavLink
              to="/dashboard/serve-meals"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Serve Meals
            </NavLink>
            <NavLink
              to="/dashboard/coming-meals"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Upcoming Meals
            </NavLink>
          </div>
        )}
        {role === "customer" && (
          <div className="flex flex-col justify-between flex-1 space-y-4 mt-8">
            <NavLink
              to="/dashboard/user-profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              My Profile
            </NavLink>
            <NavLink
              to="/dashboard/requested-meals"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Requested Meals
            </NavLink>
            <NavLink
              to="/dashboard/my-reviews"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              My Reviews
            </NavLink>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-100 font-bold text-yellow-500"
                  : "text-gray-700 hover:text-yellow-500"
              }
            >
              Payment History
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
