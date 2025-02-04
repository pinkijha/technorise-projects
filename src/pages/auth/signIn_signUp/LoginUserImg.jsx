import React from "react";
import userSignIn from "../../../assets/userSignIn.png";

const LoginUserImg = () => {
  return (
    // {/* Left side: Background Color */}
    <div className="bg-white w-fit">
   <div
      className=" relative w-fit flex flex-row  rounded-br-[100px] rounded-tr-[-100px]  bg-[#4898FF] md:h-[550px]  md:ml-[160px] md:space-y-20 
     md:w-[550px] md:py-10"
    >
      <h1
        className=" text-white font-poppins md:h-[60px] md:w-[379px] md:ml-[120px]
     text-4xl"
      >
        Super Admin Login
      </h1>
      <div className="absolute md:ml-[130px] ">
        <img
          className="md:h-[250px] md:w-[250px] h-[100px] w-[200px]  "
          src={userSignIn}
          alt="UserICon"
        />
      </div>
 
   </div>
   </div>
  );
};

export default LoginUserImg;
