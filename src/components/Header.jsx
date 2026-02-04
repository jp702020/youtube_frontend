import { Menu, Search, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b z-50
                       flex items-center justify-between px-4">

      {/* Left */}
      <div className="flex items-center gap-4">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          className="h-5"
        />
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center w-1/2">
        <input
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-l-full"
        />
        <button className="px-4 py-2 border border-l-0 rounded-r-full">
          <Search size={18} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <MoreVertical />

        {!user ? (
          <button
            onClick={() => navigate("/login")}
            className="border px-3 py-1 rounded"
          >
            Sign in
          </button>
        ) : (
          <img
            src={user.avatar}
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
