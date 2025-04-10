import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FiMenu, FiLogOut, FiHome, FiClipboard, FiUser } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: "success",
        title: "Logged Out Successfully",
        text: "You have been logged out. See you again!",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message,
      });
    }
  };

  return (
    <nav className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-3xl font-bold tracking-wide text-cyan-500">
              PlanFusion
            </NavLink>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden lg:flex md:items-center md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-500 font-bold flex items-center justify-center" : "flex items-center justify-center text-white transition hover:text-cyan-500"
              }
            >
              <FiHome className="inline-block mr-2" /> Home
            </NavLink>
            <NavLink
              to="/taskboard"
              className={({ isActive }) =>
                isActive ? "text-cyan-500 font-bold flex items-center justify-center" : "text-white flex items-center justify-center hover:text-cyan-500 transition"
              }
            >
              <FiClipboard className="inline-block mr-2" /> Tasks
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-cyan-500 font-bold flex items-center justify-center" : "text-white flex items-center justify-center hover:text-cyan-500 transition"
              }
            >
              <FiUser className="inline-block mr-2" /> Profile
            </NavLink>
          </div>
  
          {/* Action Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
      {/* <button
        onClick={handleThemeToggle}
        title="Toggle Dark Mode"
        className="text-2xl transition text-white hover:text-cyan-500"
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button> */}
      {user ? (
        <div className="relative">
          <img
            src={user.photoURL || "/default-avatar.png"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
            onClick={() => setIsUserDropdownOpen((prev) => !prev)}
            referrerPolicy="no-referrer"
          />
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
              <div className="px-4 py-2 text-gray-700 border-b">
                {user.displayName || "User"}
              </div>
              <button
                onClick={() => {
                  handleSignOut();
                  setIsUserDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
              >
                <div className="flex items-center space-x-2 cursor-pointer">
                  <FiLogOut />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          )}
        </div>
      ) : (
        <NavLink
          to="/login"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
        >
          Sign In
        </NavLink>
      )}
    </div>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-2xl text-white focus:outline-none"
            >
              <FiMenu />
            </button>
          </div>
        </div>
  
        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="mt-4 md:hidden">
            <ul className="space-y-2 bg-white rounded-md shadow-lg p-4 text-gray-900">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center space-x-2 hover:text-yellow-500 transition"
                >
                  <FiHome />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/taskboard"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center space-x-2 hover:text-yellow-500 transition"
                >
                  <FiClipboard />
                  <span>Tasks</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center space-x-2 hover:text-yellow-500 transition"
                >
                  <FiUser />
                  <span>Profile</span>
                </NavLink>
              </li>
              {/* <li className="flex items-center space-x-2">
                <button
                  onClick={handleThemeToggle}
                  className="text-2xl hover:text-green-500 transition"
                  title="Toggle Dark Mode"
                >
                  {isDarkMode ? <MdLightMode className="text-white"/> : <MdDarkMode className="text-white"/>}
                </button>
                <span>Theme</span>
              </li> */}
              {user ? (
                <>
                  <li className="flex items-center space-x-2">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border border-gray-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-medium">{user.displayName || "User"}</span>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition"
                    >
                      <FiLogOut />
                      <span>Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Sign In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;