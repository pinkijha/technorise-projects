import React from "react";
import RegisterForm from "./signIn_signUp/RegisterForm";
import LoginUserImg from "./signIn_signUp/LoginUserImg";
import logo from '../../assets/logo.png'


const Register = () => {
  

  return (
    <>
    <div className="flex flex-col md:h-screen  bg-white">
       <div>          
              {/* <img src={logo} alt="logo" className="md:h-[77px] md:ml-[160px] md:mt-[30px]" /> */}
              </div>
       <div className="flex ">
       <LoginUserImg/>
       <RegisterForm/>
       </div>
      </div>
    </>
  );
};

export default Register;
