import { useContext, useState } from "react";
import { Menu, Search, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = ({ toggleSidebar }) => {
  // ✅ hooks MUST be first, inside component
  const { user, channel, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="fixed top-0 left-0 right-0 h-14 bg-white border-b z-50
                 flex items-center justify-between px-4"
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Menu
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          className="h-5 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex items-center w-1/2">
        <input
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-l-full"
        />
        <button className="px-4 py-2 border border-l-0 rounded-r-full">
          <Search size={18} />
        </button>
      </div>

      {/* RIGHT */}
      <div className="relative flex items-center gap-4">
        <MoreVertical />

        {!user ? (
          <button
            onClick={() => navigate("/login")}
            className="border px-3 py-1 rounded"
          >
            Sign in
          </button>
        ) : (
          <>
            <img
              src={user.avatar}
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute right-0 top-12 w-48 bg-white border rounded shadow">
                {!channel ? (
                  <button
                    onClick={() => {
                      navigate("/create-channel");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Create Channel
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate(`/channel/${channel.id}`);
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    View Your Channel
                  </button>
                )}

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
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
