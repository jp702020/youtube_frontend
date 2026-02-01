import { useNavigate } from "react-router-dom";

const HeaderDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 mt-2 w-56
                    bg-white dark:bg-gray-900
                    border dark:border-gray-700
                    rounded shadow-lg">
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => navigate("/create-channel")}
      >
        ➕ Create Channel
      </button>

      <button
        className="w-full px-4 py-2 text-left text-red-500
                   hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderDropdown;
