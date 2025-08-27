import React from "react";
import { useLocation } from "react-router-dom";
import { Camera } from "lucide-react";

const AccountSetting = () => {
  const location = useLocation();
  const { fullName, email } = location.state || {}; // ✅ get data from navigate

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 py-10">
      <h2 className="text-lg font-medium text-gray-800 mb-6">
        Account Settings
      </h2>

      <div className="w-[375px] bg-white border h-screen border-gray-200 shadow-sm rounded-md p-6">
        <div className="flex items-start h- gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full shadow-md cursor-pointer">
              <Camera className="w-3 h-3 text-white" />
              <input type="file" className="hidden" />
            </label>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800">
              {fullName || "Guest User"}
            </h3>
            <p className="text-sm text-gray-500">
              {email || "guest@example.com"}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed border-t border-dashed pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad modi vero
          provident sapiente culpa nulla inventore odio reprehenderit nostrum
          dolores, explicabo itaque veritatis dolorem quae sit, atque voluptates
          quis. In!
        </p>
      </div>
    </div>
  );
};

export default AccountSetting;
