import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white z-10 shadow-sm">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="py-4 border-b-[1px]">
          <div>
            <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
              {/* Logo */}
              <Link to="/">
                <div className="">
                  <CgProfile className="text-3xl" />
                </div>
              </Link>
              {/* Dropdown Menu */}
              <div className="relative">
                <div className="flex flex-row items-center gap-3">
                  {/* Dropdown btn */}
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer"
                  >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                      <div>
                        <CgProfile className="text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0  top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                      <Link
                        to="/"
                        className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Home
                      </Link>

                      <div className="flex flex-col">
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
