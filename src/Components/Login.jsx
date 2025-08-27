import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OutlinedInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="relative w-full mb-6">
      {/* Label */}
      <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 👉 Navigate to AccountSetting with entered email
    navigate("/account-setting", {
      state: { fullName: "User", email: email },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] bg-white min-h-[600px] shadow-lg border border-gray-200 p-6">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Signin to your PopX account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Inputs */}
          <OutlinedInput
            label="Email Address*"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <OutlinedInput
            label="Password*"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
