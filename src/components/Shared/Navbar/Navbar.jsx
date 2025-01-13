import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoIosLogOut, IoMdNotifications } from "react-icons/io";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-500">
              Hostel Manager
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-yellow-400 transition text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/meals"
              className="hover:text-yellow-400 transition text-lg font-medium"
            >
              Meals
            </Link>
            <Link
              to="/upcoming-meals"
              className="hover:text-yellow-400 transition text-lg font-medium"
            >
              Upcoming Meals
            </Link>
            <div>
              <IoMdNotifications className="text-2xl" />
            </div>
            {user ? (
              <div className="relative">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="h-10 w-10 object-cover rounded-full ring-1 ring-yellow-500 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
                    <p className="px-4 py-2 text-black">{user?.displayName}</p>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </Link>
                    <button
                      className="  text-left mx-4 mb-4 mt-2 px-4 py-2 text-black border  border-gray-500 flex items-center gap-2 rounded-lg "
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
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Join Us
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          >
            Home
          </Link>
          <Link
            to="/meals"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          >
            Meals
          </Link>
          <Link
            to="/upcoming-meals"
            className="block px-4 py-2 text-white hover:bg-gray-700 transition"
          >
            Upcoming Meals
          </Link>
          {user ? (
            <>
              <button
                className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                onClick={() => console.log("Dashboard")}
              >
                Dashboard
              </button>
              <button
                className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                onClick={() => console.log("Logout")}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/join"
              className="block bg-yellow-500 text-gray-900 px-4 py-2 hover:bg-yellow-600 transition"
            >
              Join Us
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
