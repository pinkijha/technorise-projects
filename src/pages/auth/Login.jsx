import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./signIn_signUp/LoginForm";
import LoginUserImg from "./signIn_signUp/LoginUserImg";
import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col md:h-screen bg-white">
        <div>
          {/* <img
            src={logo}
            alt="logo"
            className="md:h-[77px] md:ml-[160px] md:mt-[30px]"
          /> */}
        </div>
        <div className="flex flex-row">
          <LoginUserImg />
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
