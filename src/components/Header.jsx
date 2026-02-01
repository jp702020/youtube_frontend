import { Menu, Search, MoreVertical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, loggedIn }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50
                       flex items-center justify-between
                       px-4 bg-white border-b">

      {/* Left */}
      <div className="flex items-center gap-4">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />

        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            className="h-5"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center w-1/2">
        <input
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-l-full"
        />
        <button className="px-4 py-2 border border-l-0 rounded-r-full">
          <Search size={24} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <MoreVertical className="cursor-pointer" />

        {!loggedIn ? (
          <button
            onClick={() => navigate("/login")}
            className="border px-3 py-1 rounded"
          >
            Login
          </button>
        ) : (
          <img
            src="https://i.pravatar.cc/150"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
