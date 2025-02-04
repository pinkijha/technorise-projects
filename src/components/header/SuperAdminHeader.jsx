import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import MyDatePicker from "../../pages/modules/sickleCell/datePicker";
const SuperAdminHeader = ({ isCollapsed, setIsCollapsed, selectedItem }) => {
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
    <div className="bg-white h-[65px] py-2 px-8 flex items-center sticky top-0 z-20 shadow-md gap-[20%]">
      {/* Left Side: Toggle Button and Search */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-[#CAD2FF] hover:bg-[#A9B5FF] transition-colors"
        >
          <FaBars size={20} />
        </button>

        {/* Navbar Title */}
        <span className="whitespace-nowrap"><h1 className=" ml-5 text-xl font-semibold">{selectedItem}</h1></span>
      </div>

      <div className="flex justify-end items-start flex-col gap-1">
        <h4 className="text-sm font-semibold self-start text-left">Generate Dashboard</h4>
        <div className="flex gap-4">
          <span className="text-xs font-semibold flex gap-2 items-end">To<MyDatePicker /></span>
          <span className="text-xs font-semibold flex gap-2 items-end">From<MyDatePicker /></span>
          <button className="text-xs mx-4 px-2 py-1 font-bold text-[#58677a] bg-[#b8d9ff] rounded-md">Export Into PDF</button>
        </div>
      </div>

    </div>
  );
};

export default SuperAdminHeader;
