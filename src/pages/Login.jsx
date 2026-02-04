import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: "u1",
      name: "Test User",
      avatar: "https://i.pravatar.cc/150?img=3"
    });

    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 border rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
