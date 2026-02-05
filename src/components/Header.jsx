import { useContext, useState } from "react";
import { Menu, Search, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HeaderDropdown from "./HeaderDropdown";

const Header = ({ toggleSidebar }) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b z-50
                       flex items-center justify-between px-4">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
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
          <Search size={24} />
        </button>
      </div>

      {/* RIGHT */}
<div className="relative flex items-center gap-4">
  <MoreVertical />

  {user && (
    <img
      src={user.avatar}
      className="w-8 h-8 rounded-full cursor-pointer"
      onClick={() => setOpen(!open)}
    />
  )}

  {!user && (
    <button
      onClick={() => navigate("/login")}
      className="border px-3 py-1 rounded"
    >
      Sign in
    </button>
  )}

  {open && <HeaderDropdown close={() => setOpen(false)} />}
</div>

    </header>
  );
};

export default Header;
