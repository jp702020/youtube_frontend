import { useNavigate } from "react-router-dom";

const SignInChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-96 shadow">
        {/* <h2 className="text-xl font-semibold mb-6 text-center">
          Sign in to YouTube
        </h2> */}

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-blue-600 text-white py-2 rounded mb-4"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full border py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignInChoice;
