import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // auto login after register
    login({
      name: "New User",
      avatar: "https://i.pravatar.cc/150?img=45"
    });

    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl w-96 shadow"
      >
        <h2 className="text-xl font-semibold mb-4">Register</h2>

        <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
        <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
        <input className="w-full border p-2 mb-4 rounded" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
