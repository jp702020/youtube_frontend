import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HeaderDropdown = ({ close }) => {
  const { user, channel, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div
      className="absolute right-0 top-12 w-64
                 bg-white border border-gray-200
                 rounded-xl shadow-lg z-50"
    >
      {/* USER INFO (TOP) */}
      {user && (
        <div className="flex items-center gap-3 px-4 py-3">
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            {channel && (
              <p className="text-xs text-gray-500">
                {channel.channelName}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="border-t" />

      {/* CHANNEL SECTION */}
      {user && channel && (
        <button
          onClick={() => {
            navigate(`/channel/${channel.id}`);
            close();
          }}
          className="w-full text-left px-4 py-2
                     text-sm hover:bg-gray-100"
        >
          View your channel
        </button>
      )}

      {user && !channel && (
        <button
          onClick={() => {
            navigate("/create-channel");
            close();
          }}
          className="w-full text-left px-4 py-2
                     text-sm hover:bg-gray-100"
        >
          Create a channel
        </button>
      )}

      <div className="border-t my-1" />

      {/* LOGOUT */}
      {user && (
        <button
          onClick={() => {
            logout();
            close();
          }}
          className="w-full text-left px-4 py-2
                     text-sm hover:bg-gray-100"
        >
          Sign out
        </button>
      )}

      {/* NOT LOGGED IN */}
      {!user && (
        <button
          onClick={() => {
            navigate("/login");
            close();
          }}
          className="w-full text-left px-4 py-2
                     text-sm hover:bg-gray-100"
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default HeaderDropdown;
