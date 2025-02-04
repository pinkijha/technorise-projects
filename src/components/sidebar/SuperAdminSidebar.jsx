import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import unisolLogo from "../../assets/
// import technokrateSmallLogo from "../../assets/TechknokrateSmalllogo.png";
import { useSignIn } from "../../hooks/auth/useSignIn";
import { useNavigate } from "react-router-dom";
import { userAuthState } from "../../state/authenticatedState/authenticatedState";
import { useSetRecoilState } from "recoil";
import logo from "../../assets/logo1.jpeg";
import icon from "../../assets/icon.png"

const SuperAdminSidebar = ({ setActiveTab, isCollapsed,selectedItem,setSelectedItem }) => {
  const [isInventoryExpanded, setInventoryExpanded] = useState(false);
  // const [selectedItem, setSelectedItem] = useState("Description");
  const navigate = useNavigate();
  const { resetSuperAdmin } = useSignIn();
  const setUserInfo = useSetRecoilState(userAuthState);

  const handleTabClick = (tabName) => {
    setSelectedItem(tabName);
    setActiveTab(tabName);

    if (tabName === "Inventory") {
      setInventoryExpanded(!isInventoryExpanded);
    } else {
      setInventoryExpanded(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUserInfo({
      isAuthenticated: false,
    });
    resetSuperAdmin();
    navigate("/");
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-full"
      } min-h-full flex flex-col justify-between relative`}
      style={{ backgroundColor: "#E9EBF7" }}
    >
      {/* Top Section */}
      <div>
        {/* Logo Section */}
        <div className="w-full flex flex-col justify-center items-center">
          {isCollapsed ? (
            <img
              className="h-[50px] w-[50px] object-contain"
              // src={technokrateSmallLogo}
              // alt="Technokrate Small Logo"
            />
          ) : (
            // <img
            //   className="h-[70px] w-[200px] object-contain"
            //   src={logo}
            // />
            <p className="mt-3 font-bold text-2xl">Admin Dashboard</p>
          )}
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${isCollapsed ? "px-2" : "px-4"}`}>
          <ul>
            <li onClick={() => handleTabClick("Dashboard")}>
              <NavLink to="/dashboard" className="cursor-pointer">
                <div
                  className={`flex ${
                    isCollapsed ? "justify-center" : "pl-5"
                  } p-4 text-black h-[33px] text-sm items-center gap-4 my-5 rounded-xl`}
                  style={{
                    backgroundColor:
                      selectedItem === "dashboard" ? "#A9B5FF" : "#CAD2FF",
                  }}
                >
                  <span className={isCollapsed ? "" : "ml-0"}>
                    <img
                      src= {icon}
                      alt="Warehouse Icon"
                      className="w-4 h-4"
                    />
                  </span>
                  {!isCollapsed && <span>Dashboard</span>}
                </div>
              </NavLink>
            </li>

            <li onClick={() => handleTabClick("Sickle Cell")}>
              <NavLink to="/sicklecell" className="cursor-pointer">
                <div
                  className={`flex ${
                    isCollapsed ? "justify-center" : "pl-5"
                  } p-4 text-black h-[33px] text-sm items-center gap-4 my-5 rounded-xl`}
                  style={{
                    backgroundColor:
                      selectedItem === "About" ? "#A9B5FF" : "#CAD2FF",
                  }}
                >
                  <span className={isCollapsed ? "" : "ml-0"}>
                    <img
                      src= {icon}
                      alt="Warehouse Icon"
                      className="w-4 h-4"
                    />
                  </span>
                  {!isCollapsed && <span>Sickle Cell</span>}
                </div>
              </NavLink>
            </li>

            <li onClick={() => handleTabClick("Breast Cancer")}>
              <NavLink to="/breastCancer" className="cursor-pointer">
                <div
                  className={`flex ${
                    isCollapsed ? "justify-center" : "pl-5"
                  } p-4 text-black h-[33px] text-sm items-center gap-4 my-5 rounded-xl`}
                  style={{
                    backgroundColor:
                      selectedItem === "About" ? "#A9B5FF" : "#CAD2FF",
                  }}
                >
                  <span className={isCollapsed ? "" : "ml-0"}>
                    <img
                      src= {icon}
                      alt="Warehouse Icon"
                      className="w-4 h-4"
                    />
                  </span>
                  {!isCollapsed && <span>Breast Cancer</span>}
                </div>
              </NavLink>
            </li>

                 <li onClick={() => handleTabClick("Cervical Cancer")}>
              <NavLink to="/cervicalCancer" className="cursor-pointer">
                <div
                  className={`flex ${
                    isCollapsed ? "justify-center" : "pl-5"
                  } p-4 text-black h-[33px] text-sm items-center gap-4 my-5 rounded-xl`}
                  style={{
                    backgroundColor:
                      selectedItem === "About" ? "#A9B5FF" : "#CAD2FF",
                  }}
                >
                  <span className={isCollapsed ? "" : "ml-0"}>
                    <img
                      src= {icon}
                      alt="Warehouse Icon"
                      className="w-4 h-4"
                    />
                  </span>
                  {!isCollapsed && <span>Cervical Cancer</span>}
                </div>
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mb-4">
        <p
          onClick={handleLogout}
          className={`cursor-pointer hover:font-medium flex items-center gap-2 ${
            isCollapsed ? "justify-center" : "pl-5"
          } text-[#000000]`}
        >
          <span className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5.5 0 0 0 9.5 2h-8A1.5.5 0 0 0 0 3.5v9A1.5.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </span>
          {!isCollapsed && <span>Log out</span>}
        </p>
      </div>
    </div>
  );
};

export default SuperAdminSidebar;
