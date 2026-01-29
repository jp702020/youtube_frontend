import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", { email, password });
    login(res.data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <form
  onSubmit={handleSubmit}
  className="bg-white dark:bg-gray-900 p-6 rounded w-80 border border-gray-300 dark:border-gray-700"
>
  <h2 className="text-xl mb-4 text-black dark:text-white">
    Login
  </h2>

  <input
    type="email"
    placeholder="Email"
    className="w-full mb-3 px-3 py-2 rounded
               bg-white text-black border border-gray-300
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               focus:outline-none focus:ring-2 focus:ring-red-500"
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full mb-3 px-3 py-2 rounded
               bg-white text-black border border-gray-300
               dark:bg-gray-800 dark:text-white dark:border-gray-600
               focus:outline-none focus:ring-2 focus:ring-red-500"
    onChange={(e) => setPassword(e.target.value)}
  />

  <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
    Login
  </button>
</form>

    </div>
  );
};

export default Login;
