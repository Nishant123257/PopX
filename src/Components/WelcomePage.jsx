import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-[360px] h-[80%] p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
        <div className="bg bg-white h-screen"></div>
        <h1 className="text-xl font-semibold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          className="w-full py-3 mb-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition cursor-pointer"
          onClick={() => navigate("/Create-account")}
        >
          Create Account
        </button>

        <button
          className="w-full py-3 bg-purple-100 text-purple-700 font-medium rounded-lg cursor-pointer hover:bg-purple-200 transition"
          onClick={() => navigate("/Login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
