import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  // close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="flex justify-between items-center px-4 py-2
                       bg-white dark:bg-black border-b dark:border-gray-700">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-red-600">YouTube</span>
      </Link>

      {/* Search placeholder (already implemented earlier) */}
      <div className="hidden md:block w-1/3"></div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative" ref={menuRef}>
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="px-2 py-1 border rounded dark:text-white"
        >
          🌗
        </button>

        {/* AUTH SECTION */}
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-3 py-1 border rounded text-sm dark:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 bg-red-600 text-white rounded text-sm"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {/* Profile Photo */}
            <img
              src={user.avatar || "https://i.pravatar.cc/150"}
              alt="profile"
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full cursor-pointer border"
            />

            {/* Dropdown */}
            {open && (
              <div
                className="absolute right-0 top-12 w-56
                           bg-white dark:bg-gray-900
                           border dark:border-gray-700
                           rounded shadow-lg z-50"
              >
                <div className="px-4 py-3 border-b dark:border-gray-700">
                  <p className="text-sm font-semibold dark:text-white">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>

                <button
                  onClick={() => {
                    navigate("/create-channel");
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2
                             hover:bg-gray-100 dark:hover:bg-gray-800
                             dark:text-white"
                >
                  ➕ Create Channel
                </button>

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2
                             text-red-500 hover:bg-gray-100
                             dark:hover:bg-gray-800"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
