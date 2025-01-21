import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoIosLogOut, IoMdNotifications } from "react-icons/io";
import toast from "react-hot-toast";
import useRole from "../../../hooks/useRole";
import navLogo from "../../../../src/assets/logo/New Project.png";
import navIcon from "../../../../src/assets/logo/profile.png";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [role] = useRole();
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <nav className="bg-gray-100/50 text-gray-900 shadow-md sticky top-0 z-50 backdrop-blur-md ">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img
                src={navLogo}
                className="rounded-full w-8 h-8 object-cover"
              ></img>
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                <span className="text-blue-600">Hostel</span>Management
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-lg "
                  : "hover:text-blue-600 transition text-lg "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/meals"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-lg "
                  : "hover:text-blue-600 transition text-lg "
              }
            >
              Meals
            </NavLink>
            <NavLink
              to="/upcoming-meals"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 text-lg "
                  : "hover:text-blue-600 transition text-lg "
              }
            >
              Upcoming Meals
            </NavLink>
            <div>
              <IoMdNotifications className="text-2xl" />
            </div>
            {user ? (
              <div className="relative">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="h-10 w-10 object-cover rounded-full ring-2 ring-blue-500 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-40 bg-gray-100 shadow-lg rounded">
                    <p className="px-4 py-2 text-gray-800">
                      {user?.displayName}
                    </p>
                    {role === "admin" ? (
                      <Link
                        to="/dashboard/admin-profile"
                        className="block px-4  text-gray-800 transition"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        to="/dashboard/user-profile"
                        className="block px-4  text-gray-800 transition"
                      >
                        Dashboard
                      </Link>
                    )}

                    <button
                      className="text-left mx-4 mb-4 mt-4 px-4 py-2 text-gray-100 flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 transition"
                      onClick={handleLogOut}
                    >
                      Logout
                      <IoIosLogOut className="text-xl" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-blue-800 transition text-gray-100 px-4 py-2 rounded-md"
              >
                Join Us
              </Link>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <img
                  src={user?.photoURL || navIcon}
                  alt="User Profile"
                  className="h-7 w-7 rounded-full object-cover ring-2 ring-blue-600"
                />
              ) : (
                <img
                  src={user?.photoURL || navIcon}
                  alt="User Profile"
                  className="h-7 w-7 rounded-full object-cover ring-2 ring-blue-600"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100/80 pb-3">
          <div className="flex flex-col gap-2 pt-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 text-blue-600 transition"
                  : "block px-4 text-gray-800 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/meals"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 text-blue-600 transition"
                  : "block px-4 text-gray-800 transition"
              }
            >
              Meals
            </NavLink>
            <NavLink
              to="/upcoming-meals"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 text-blue-600 transition"
                  : "block px-4 text-gray-800 transition"
              }
            >
              Upcoming Meals
            </NavLink>
          </div>
          {user ? (
            <div>
              {role === "admin" ? (
                <Link
                  to="/dashboard/admin-profile"
                  className="block px-4 text-gray-800 transition mt-2"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/dashboard/user-profile"
                  className="block px-4 text-gray-800 transition mt-2"
                >
                  Dashboard
                </Link>
              )}

              <button
                className=" px-4 py-2 ml-4 mt-4 rounded-md text-gray-100 bg-gradient-to-r from-blue-600 to-blue-800 transition flex items-center gap-1"
                onClick={handleLogOut}
              >
                <CiLogout />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="inline-block rounded-md  bg-gradient-to-r from-blue-600 to-blue-800 text-gray-100 px-4 py-2 ml-4 mt-3 transition">
                Join Us
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
