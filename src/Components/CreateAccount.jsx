import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OutlinedInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="relative w-full mb-6">
      {/* Label */}
      <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      />
    </div>
  );
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ pass data to AccountSetting
    navigate("/account-setting", {
      state: { fullName: formData.fullName, email: formData.email },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[375px] bg-gray-50 min-h-[650px] shadow-sm border border-gray-200 p-6">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Create your PopX account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Inputs */}
          <OutlinedInput
            label="Full Name*"
            type="text"
            placeholder="Enter Your Name"
            value={formData.fullName}
            onChange={handleChange("fullName")}
          />
          <OutlinedInput
            label="Phone number*"
            type="text"
            placeholder="Enter your Phone Number"
          />
          <OutlinedInput
            label="Email address*"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          <OutlinedInput
            label="Password*"
            type="password"
            placeholder="Enter Your Password"
          />
          <OutlinedInput
            label="Company name*"
            type="text"
            placeholder="Enter your Company Name"
          />

          {/* Radio buttons */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Are you an Agency?*</p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="text-purple-600 focus:ring-purple-500"
                  defaultChecked
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="text-purple-600 focus:ring-purple-500"
                />
                No
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
