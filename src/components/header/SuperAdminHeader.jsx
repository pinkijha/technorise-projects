import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";

const SuperAdminHeader = ({ isCollapsed, setIsCollapsed }) => {
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setError("Search query cannot be empty.");
    } else {
      setError("");
      console.log("Search for:", searchQuery);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-white h-[65px] py-2 px-8 flex items-center sticky top-0 z-20 shadow-md">
      {/* Left Side: Toggle Button and Search */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-[#CAD2FF] hover:bg-[#A9B5FF] transition-colors"
        >
          <FaBars size={20} />
        </button>

        <span className="relative flex">
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#F5F6FA] border h-[40px] w-[350px] border-[#BDC3C9] rounded-full pl-2 pr-7 py-1 focus:outline-none focus:border-blue-500"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-300" />
        </span>
      </div>

      {/* Right Side: SuperAdmin Logo and Icons */}
      <div className="flex items-center ml-auto space-x-6">
        <div className="flex flex-col justify-center items-center pr-2">
          <img
            className="cursor-pointer w-[30px] h-[30px] object-cover rounded-full hover:border-2 hover:border-black"
            src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SuperAdmin Logo"
          />
          <span className="text-[12px]">SuperAdmin</span>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminHeader;
