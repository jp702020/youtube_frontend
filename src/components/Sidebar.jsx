import { Link } from "react-router-dom";
import {
  Home,
  Clapperboard,
  Tv,
  User,
  History,
  Flame,
  ShoppingBag,
  Music,
  Film,
  Radio,
  Gamepad2,
  Newspaper
} from "lucide-react";

const Sidebar = ({ open }) => {
  if (!open) return null;

  const item =
    "flex items-center gap-5 px-3 py-2 rounded cursor-pointer hover:bg-gray-100";

  return (
    <aside
      className="fixed top-14 left-0 w-56 h-full
                 bg-white border-r
                 px-3 py-2 text-sm overflow-y-auto"
    >
      {/* Main */}
      <Link to="/" className={`${item} bg-gray-100 font-medium`}>
        <Home size={20} />
        Home
      </Link>

      <div className={item}>
        <Clapperboard size={20} />
        Shorts
      </div>

      <div className={item}>
        <Tv size={20} />
        Subscriptions
      </div>

      <hr className="my-3" />

      {/* You */}
      <div className="px-3 py-1 font-medium text-gray-600">
        You
      </div>

      <div className={item}>
        <User size={20} />
        Your channel
      </div>

      <div className={item}>
        <History size={20} />
        History
      </div>

      <hr className="my-3" />

      {/* Sign in */}
      <div className="px-3 py-2 text-gray-600 text-sm">
        Sign in to like videos, comment, and subscribe.
      </div>

      <button
        className="ml-3 mt-2 px-4 py-1
                   border rounded-full
                   text-blue-600 font-medium"
      >
        Sign in
      </button>

      <hr className="my-4" />

      {/* Explore */}
      <div className="px-3 py-1 font-medium text-gray-600">
        Explore
      </div>

      <div className={item}>
        <Flame size={20} />
        Trending
      </div>

      <div className={item}>
        <ShoppingBag size={20} />
        Shopping
      </div>

      <div className={item}>
        <Music size={20} />
        Music
      </div>

      <div className={item}>
        <Film size={20} />
        Movies
      </div>

      <div className={item}>
        <Radio size={20} />
        Live
      </div>

      <div className={item}>
        <Gamepad2 size={20} />
        Gaming
      </div>

      <div className={item}>
        <Newspaper size={20} />
        News
      </div>
    </aside>
  );
};

export default Sidebar;
