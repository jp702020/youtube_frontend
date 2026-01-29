import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <form
  onSubmit={handleSubmit}
  className="bg-white dark:bg-gray-900 p-6 rounded w-80 border border-gray-300 dark:border-gray-700"
>
  <h2 className="text-xl mb-4 text-black dark:text-white">
    Register
  </h2>

  <input
    placeholder="Username"
    className="w-full mb-3 px-3 py-2 rounded
               bg-white text-black border border-gray-300
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               focus:outline-none focus:ring-2 focus:ring-red-500"
    onChange={(e) =>
      setForm({ ...form, username: e.target.value })
    }
  />

  <input
    placeholder="Email"
    className="w-full mb-3 px-3 py-2 rounded
               bg-white text-black border border-gray-300
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               focus:outline-none focus:ring-2 focus:ring-red-500"
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full mb-3 px-3 py-2 rounded
               bg-white text-black border border-gray-300
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               focus:outline-none focus:ring-2 focus:ring-red-500"
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
  />

  <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
    Register
  </button>
</form>

    </div>
  );
};

export default Register;
