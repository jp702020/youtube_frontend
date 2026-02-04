import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // dummy signup → auto login
    login({
      id: "u2",
      name: name || "New User",
      email,
      avatar: "https://i.pravatar.cc/150?img=8",
    });

    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 border rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Sign up</h2>

        <input
          type="text"
          placeholder="Full name"
          className="w-full border px-3 py-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded"
        >
          Sign up
        </button>
        <p className="text-sm mt-4 text-center">
  Already have an account?{" "}
  <span
    onClick={() => navigate("/login")}
    className="text-blue-600 cursor-pointer"
  >
    Sign in
  </span>
</p>

      </div>
    </div>
  );
};

export default Signup;
