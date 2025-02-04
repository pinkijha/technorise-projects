import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SignInUpBtn = () => {
  const location = useLocation(); // Get the current route path

  return (
    <div
      className="flex bg-gray-100 md:px-6 md:py-4 border z-5 transform 
      rounded-tl-3xl rounded-tr-3xl shadow-lg space-x-7 text-[#447BFF] font-poppins text-[20px]"
    >
      {/* Sign Up Link */}
      <Link to="/register">
        <p
          className={`cursor-pointer pb-1 ${
            location.pathname === '/register'
              ? 'border-b-4 border-[#E6F8FF] text-gray-600'
              : ''
          }`}
        >
          Sign Up
        </p>
      </Link>

      {/* Sign In Link */}
      <Link to="/">
        <p
          className={`cursor-pointer pb-1 ${
            location.pathname === '/'
              ? 'border-b-4 border-[#4898FF] text-gray-600'
              : ''
          }`}
        >
          Sign In
        </p>
      </Link>
    </div>
  );
};

export default SignInUpBtn;
